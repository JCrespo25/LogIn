const express = require('express');
const router = express.Router();
const RequestDEMO = require('../../models/profiles/externos/solicitudesDEMO');
const { isAuthenticated } = require('../../helpers/auth');

/*INDEX*/
router.get('/SYS/index', isAuthenticated, (req, res) => {
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

    // console.log(nombre + ' ' + apPaterno + ' ' + apMaterno + ' ' + typeUser + ' ' + correo + ' ' + user + ' ' + password);
    const newProfileInterno = new ProfileInterno({
        nombre,
        apPaterno,
        apMaterno,
        typeUser,
        correo,
        user,
        password
    });

    newProfileInterno.password = await newProfileInterno.encryptPassword(password);
    await newProfileInterno.save();
    req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
    res.redirect('/users/sign');
});

module.exports = router;