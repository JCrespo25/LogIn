const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

// router.post('/users/signin', passport.authenticate('local', {
//     successRedirect: '/notes',
//     failureRedirect: '/users/signin',
//     failureFlash: true
// }));

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signin', async(req, res) => {
    const {
        empresaName,
        empresaTradeName,
        representanteName,
        representanteApPaterno,
        representanteApMaterno,
        contactoNumberFijo,
        contactoCelular,
        contactoCorreo
    } = req.body;

    const errors = [];

    const emailUser = await User.findOne({ contactoCorreo: contactoCorreo });
    const companyName = await User.findOne({ empresaName: empresaName });
    if (emailUser || companyName) {
        errors.push({ text: 'Ya se ha solicitado la demo' });
    } else if (empresaName == '' || empresaTradeName == '' ||
        representanteName == '' || representanteApPaterno == '' ||
        contactoNumberFijo == '' || contactoCorreo == '') {
        errors.push({ text: 'Asegurese de que todos los campos requeridos(*) esten completos' });
    }


    if (errors.length > 0) {
        res.render('users/signin', {
            errors,
            empresaName,
            empresaTradeName,
            representanteName,
            representanteApPaterno,
            representanteApMaterno,
            contactoNumberFijo,
            contactoCelular,
            contactoCorreo
        });
    }



    if (errors.length == 0) {
        const newUser = new User({
            empresaName,
            empresaTradeName,
            representanteName,
            representanteApPaterno,
            representanteApMaterno,
            contactoNumberFijo,
            contactoCelular,
            contactoCorreo
        });
        // newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        req.flash('success_msg', 'Usuario registrado satisfactoriamente');
        res.redirect('/users/signin');
    }
});


router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router;