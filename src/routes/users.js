const express = require('express');
const router = express.Router();
const profileClient = require('../models/profileClient');
const passport = require('passport');

router.get('/users/sign', (req, res) => {
    res.render('users/sign');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/sign',
    failureFlash: true
}));

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.get('/users/request-send', (req, res) => {
    res.render('users/sign');
});

router.post('/users/request-send', async(req, res) => {
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
    const emailUser = await profileClient.findOne({ contactoCorreo: contactoCorreo });
    const companyName = await profileClient.findOne({ empresaName: empresaName });

    if (emailUser || companyName) {
        errors.push({ text: 'Ya se ha solicitado la demo' });
    } else if (empresaName == '' || empresaTradeName == '' ||
        representanteName == '' || representanteApPaterno == '' ||
        contactoNumberFijo == '' || contactoCorreo == '') {
        errors.push({ text: 'Asegurese de que todos los campos requeridos(*) esten completos' });
    }

    if (errors.length > 0) {
        res.render('users/sign', {
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
        const newProfileClient = new profileClient({
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
        await newProfileClient.save();
        req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
        res.redirect('/users/sign');
    }
});


router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router;