const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UserClient = require('../models/profiles/client');
const UserInternal = require('../models/profiles/internal');
const errors = [];

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {

    var numberChars = email.length;
    var firstCharOfEndThree = numberChars - 3;
    var ThreeChars = email.substring(firstCharOfEndThree, numberChars);
    ThreeChars = ThreeChars.toUpperCase();
    var point = email.charAt(firstCharOfEndThree - 1);

    console.log('~' + point + '~' + ThreeChars + '~');
    if (point + ThreeChars == ".NET") {
        const user = await UserInternal.findOne({ email: email });
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
    } else {
        const user = await UserClient.findOne({ email: email });
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
    UserClient.findById(id, (err, user) => {
        done(err, user);
    });
});