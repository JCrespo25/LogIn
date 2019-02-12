const express = require('express');
const router = express.Router();
const Clientes = require('../../models/profiles/externos/clientes');
const RequestDEMO = require('../../models/profiles/externos/solicitudesDEMO');
const { isAuthenticated } = require('../../helpers/auth');

/*ALTA CLIENTE*/
router.get('/SYS/clientes/altaCliente', isAuthenticated, (req, res) => {
    res.render('internal/clientes/alta_Clientes');
});

/*VER CLIENTE*/
router.get('/SYS/clientes/verClientes', isAuthenticated, (req, res) => {
    res.render('internal/clientes/Ver_clientes');
});

/*VER SOLICITUDES*/
router.get('/SYS/clientes/verSolicitudes', isAuthenticated, async(req, res, next) => {
    const solicitantes = await RequestDEMO.find(req._id).sort({ id_autoIncrement: 'desc' });
    res.render('internal/clientes/Ver_solicitantes', { solicitantes });
});

/*GET ALL INFORMATION REQUEST*/
router.post('/SYS/clientes/create/cliente', isAuthenticated, async(req, res) => {
    const {
        empresaRazonSocial,
        empresaNombreComercial,
        representanteName,
        representanteApellidoPaterno,
        representanteApellidoMaterno,
        contactoNumeroFijo,
        contactoNumeroCelular,
        contactoCorreo,
        fechaSolicitud,
        IDe,
        IDa,
        userName,
        userPassword,
        userPasswordConfirm,
        userCuestion,
        userAnswer,
        datosFiscalesMEXFolioF,
        datosFiscalesMEXFolioCP,
        datosFiscalesMEXNombreEmpresa,
        datosFiscalesMEXColonia,
        datosFiscalesMEXCalle,
        datosFiscalesMEXNoExterior,
        datosFiscalesMEXNoInterior,
        datosFiscalesMEXEntreCalles,
        datosFiscalesMEXDireccionFiscal,
        datosFiscalesMEXRazonSocial,
        datosFiscalesMEXEstadoMexicano,
        datosFiscalesMEXCiudadMexicana,
        datosFiscalesMEXRFC,
        datosFiscalesMEXTelefono,
        datosFiscalesEUAFolioCP,
        datosFiscalesEUANombreEmpresa,
        datosFiscalesEUAColonia,
        datosFiscalesEUACalle,
        datosFiscalesEUANoExterior,
        datosFiscalesEUANoInterior,
        datosFiscalesEUAEntreCalles,
        datosFiscalesEUACodigoPostal,
        datosFiscalesEUATAXID,
        datosFiscalesEUATelefono,
        checkBoxDEMO1,
        checkBoxDEMO2,
        checkBoxDEMO3,
        checkBoxDEMO4,
        checkBoxDEMO5,
        checkBoxOTHERS1,
        checkBoxOTHERS2,
        checkBoxOTHERS3,
        checkBoxOTHERS4,
        checkBoxOTHERS5,
        checkBoxOTHERS6,
        checkBoxOTHERS7,
        checkBoxOTHERS8,
        checkBoxOTHERS9,
        checkBoxOTHERS10,
        checkBoxOTHERS11,
        checkBoxOTHERS12,
        checkBoxOTHERS13,
        checkBoxOTHERS14,
        checkBoxOTHERS15,
        checkBoxOTHERS16
    } = req.body;

    const clientes = new Clientes({
        empresaRazonSocial,
        empresaNombreComercial,
        representanteName,
        representanteApellidoPaterno,
        representanteApellidoMaterno,
        contactoNumeroFijo,
        contactoNumeroCelular,
        contactoCorreo,
        fechaSolicitud,
        IDe,
        IDa,
        userName,
        userPassword,
        userCuestion,
        userAnswer,
        datosFiscalesMEXFolioF,
        datosFiscalesMEXFolioCP,
        datosFiscalesMEXNombreEmpresa,
        datosFiscalesMEXColonia,
        datosFiscalesMEXCalle,
        datosFiscalesMEXNoExterior,
        datosFiscalesMEXNoInterior,
        datosFiscalesMEXEntreCalles,
        datosFiscalesMEXDireccionFiscal,
        datosFiscalesMEXRazonSocial,
        datosFiscalesMEXEstadoMexicano,
        datosFiscalesMEXCiudadMexicana,
        datosFiscalesMEXRFC,
        datosFiscalesMEXTelefono,
        datosFiscalesEUAFolioCP,
        datosFiscalesEUANombreEmpresa,
        datosFiscalesEUAColonia,
        datosFiscalesEUACalle,
        datosFiscalesEUANoExterior,
        datosFiscalesEUANoInterior,
        datosFiscalesEUAEntreCalles,
        datosFiscalesEUACodigoPostal,
        datosFiscalesEUATAXID,
        datosFiscalesEUATelefono,
        checkBoxDEMO1,
        checkBoxDEMO2,
        checkBoxDEMO3,
        checkBoxDEMO4,
        checkBoxDEMO5,
        checkBoxOTHERS1,
        checkBoxOTHERS2,
        checkBoxOTHERS3,
        checkBoxOTHERS4,
        checkBoxOTHERS5,
        checkBoxOTHERS6,
        checkBoxOTHERS7,
        checkBoxOTHERS8,
        checkBoxOTHERS9,
        checkBoxOTHERS10,
        checkBoxOTHERS11,
        checkBoxOTHERS12,
        checkBoxOTHERS13,
        checkBoxOTHERS14,
        checkBoxOTHERS15,
        checkBoxOTHERS16
    });

    clientes.userPassword = await clientes.encryptPassword(userPassword);
    await clientes.save();
    req.flash('success_msg', 'Su solicitud se ha enviado correctamente favor de esperar una de nuestras llamadas ya que alguno de nuestros agentes se comunicara con usted a la brevedad');
    res.render('internal/clientes/Ver_clientes');
});

module.exports = router;