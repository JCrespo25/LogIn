const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserClient = require('../models/profiles/externos/clientes');
const UserInternal = require('../models/profiles/internos/master');
const errors = [];

var numberChars;
var firstCharOfEndThree;;
var ThreeChars;
var point;

passport.use(new LocalStrategy({
    usernameField: 'userName'
}, async(userName, password, done) => {

    numberChars = userName.length;
    firstCharOfEndThree = numberChars - 3;
    ThreeChars = userName.substring(firstCharOfEndThree, numberChars);
    ThreeChars = ThreeChars.toLowerCase();
    point = userName.charAt(firstCharOfEndThree - 1);
    var master, cliente, user;

    if (point + ThreeChars == ".net") {

        var master = await UserInternal.findOne({ userMaster: userName });
        if (!master) {
            return done(null, false, { message: 'No se encontro el usuario' });
        } else {
            const match = await master.matchPassword(password);
            if (!match) {
                return done(null, false, { message: 'Contraseña incorrecta' });
            } else {
                user = master;
                return done(null, master);
            }
        }
    } else {
        const cliente = await UserClient.findOne({ userName: userName });
        if (!cliente) {
            return done(null, false, { message: 'No se encontro el usuario' });
        } else {
            const match = await cliente.matchPassword(password);
            if (!match) {
                return done(null, false, { message: 'Contraseña incorrecta' });
            } else {
                user = cliente;
                return done(null, cliente);
            }
        }
    }
}));

passport.serializeUser((master, done) => {
    done(null, master.id);

    passport.deserializeUser((id, done) => {
        if (point + ThreeChars == ".net") {

            UserInternal.findById(id, (err, master) => {
                done(err, master);
            });
        }

        /*else {
            UserClient.findById(id, (err, user) => {
                done(err, user);
            });
        }*/
    });
});