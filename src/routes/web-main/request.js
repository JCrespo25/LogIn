const express = require('express');
const router = express.Router();
const profileClient = require('../../models/profiles/externos/solicitudesDEMO');
const passport = require('passport');

/*SOLCIITUD DE LA DMEO*/
router.post('/main/request', async(req, res) => {
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
        res.render('web-main/web-main', {
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
        await newProfileClient.save();
        req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
        res.render('web-main/web-main');
    }
});


module.exports = router;