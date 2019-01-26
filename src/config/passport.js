const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserClient = require('../models/profiles/externos/solicitudesDEMO');
const UserInternal = require('../models/profiles/internos/master');
const errors = [];

passport.use(new LocalStrategy({
    usernameField: 'userName'
}, async(userName, password, done) => {

    var numberChars = userName.length;
    var firstCharOfEndThree = numberChars - 3;
    var ThreeChars = userName.substring(firstCharOfEndThree, numberChars);
    ThreeChars = ThreeChars.toUpperCase();
    var point = userName.charAt(firstCharOfEndThree - 1);

    if (point + ThreeChars == ".NET") {

        var user = await UserInternal.findOne({ user: userName });

        console.log("User: " + user);
        console.log("UserName: " + userName);


        if (!user) {
            return done(null, false, { message: 'No se encontro el usuario' });
        } else {
            const match = await user.matchPassword(password);
            if (!match) {
                return done(null, false, { message: 'Contraseña incorrecta' });
            } else {
                return done(null, user);
            }
        }
    } else {
        const user = await UserClient.findOne({ user: email });
        if (!user) {
            return done(null, false, { message: 'No se encontro el usuario' });
        } else {
            const match = await user.matchPassword(password);
            if (match) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Contraseña incorrecta' });
            }
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    UserInternal.findById(id, (err, user) => {
        done(err, user);
    });
});