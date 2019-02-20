const express = require('express');
const router = express.Router();
const ProfileInterno = require('../../models/profiles/internos/master');

/*REGISTRO DE UN MASTER*/
router.get('/SYS/master', (req, res) => {
    res.render('internal/inicio/index');
});

/*CREACION DE CUENTA MASTER*/
router.post('/users/master', async(req, res) => {
    const {
        nombre,
        apPaterno,
        apMaterno,
        typeUser,
        correo,
        user,
        password
    } = req.body;

    var userMaster = user;
    var numberChars = userMaster.length;
    var firstCharOfThree = numberChars - 3;
    var ThreeChars = userMaster.substring(firstCharOfThree, numberChars);
    ThreeChars = ThreeChars.toLowerCase();
    var point = userMaster.charAt(firstCharOfThree - 1);
    var pointNet = point + ThreeChars;

    if (pointNet != ".net") {

        userMaster = userMaster + ".net"
        const newProfileInterno = new ProfileInterno({
            nombre,
            apPaterno,
            apMaterno,
            typeUser,
            correo,
            userMaster,
            password
        });

        newProfileInterno.password = await newProfileInterno.encryptPassword(password);
        await newProfileInterno.save();
        req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
        res.redirect('/users/logout');

    } else {
        const newProfileInterno = new ProfileInterno({
            nombre,
            apPaterno,
            apMaterno,
            typeUser,
            correo,
            userMaster,
            password
        });

        newProfileInterno.password = await newProfileInterno.encryptPassword(password);
        await newProfileInterno.save();
        req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
        res.redirect('/users/logout');
    }
});

module.exports = router;