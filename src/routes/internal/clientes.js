const express = require('express');
const router = express.Router();
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
router.get('/SYS/clientes/verSolicitudes', isAuthenticated, async(req, res) => {
    const solicitantes = await RequestDEMO.find(req._id).sort({ id_autoIncrement: 'desc' });
    res.render('internal/clientes/Ver_solicitantes', { solicitantes });
});

/*GET ALL INFORMATION REQUEST*/
router.post('/SYS/clientes/create/cliente', isAuthenticated, async(req, res) => {
    console.log(req.set._empresaname); //mytext is the name of your input box

    //_empresaname
    // _empresatradename,
    // _representantename,
    // _representanteappaterno,
    // _representanteapmaterno,
    // _contactonumberfijo,
    // _contactocelular,
    // _contactocorreo,
    // _fechasolicitud,
    // _IDe,
    // _IDa,
    // _user,
    // _password,
    // _confirmpassword,
    // _cuestion,
    // _cuestionrequest,
    // _mexFolioF,
    // _mexFolioCP,
    // _mexEmpresa,
    // _mexColonia,
    // _mexCalle,
    // _mexNoExterior,
    // _mexNoInterior,
    // _mexEntreCalles,
    // _mexDireccionFiscal,
    // _mexRazonSocial,
    // _mexEstadoMexicano,
    // _mexCiudadMexicana,
    // _mexRFC,
    // _mexTelefono,
    // _euaFolioF,
    // _euaEmpresa,
    // _euaColonia,
    // _euaCalle,
    // _euaNoExterior,
    // _euaNoInterior,
    // _euaEntreCalles,
    // _euaCP,
    // _euaTaxID,
    // _euatelefono,
    // checkBoxModule_Demo_1,
    // checkBoxModule_Demo_2,
    // checkBoxModule_Demo_3,
    // checkBoxModule_Demo_4,
    // checkBoxModule_Demo_5,
    // checkModule_others_1,
    // checkModule_others_2,
    // checkModule_others_3,
    // checkModule_others_4,
    // checkModule_others_5,
    // checkModule_others_6,
    // checkModule_others_7,
    // checkModule_others_8,
    // checkModule_others_9,
    // checkModule_others_10,
    // checkModule_others_11,
    // checkModule_others_12,
    // checkModule_others_13,
    // checkModule_others_14,
    // checkModule_others_15,
    // checkModule_others_16,

    //console.log(
    //empresaname
    // _empresatradename + ' ' +
    // _representantename + ' ' +
    // _representanteappaterno + ' ' +
    // _representanteapmaterno + ' ' +
    // _contactonumberfijo + ' ' +
    // _contactocelular + ' ' +
    // _contactocorreo + ' ' +
    // _fechasolicitud + ' ' +
    // _IDe + ' ' +
    // _IDa + ' ' +
    // _user + ' ' +
    // _password + ' ' +
    // _confirmpassword + ' ' +
    // _cuestion + ' ' +
    // _cuestionrequest + ' ' +
    // _mexFolioF + ' ' +
    // _mexFolioCP + ' ' +
    // _mexEmpresa + ' ' +
    // _mexColonia + ' ' +
    // _mexCalle + ' ' +
    // _mexNoExterior + ' ' +
    // _mexNoInterior + ' ' +
    // _mexEntreCalles + ' ' +
    // _mexDireccionFiscal + ' ' +
    // _mexRazonSocial + ' ' +
    // _mexEstadoMexicano + ' ' +
    // _mexCiudadMexicana + ' ' +
    // _mexRFC + ' ' +
    // _mexTelefono + ' ' +
    // _euaFolioF + ' ' +
    // _euaEmpresa + ' ' +
    // _euaColonia + ' ' +
    // _euaCalle + ' ' +
    // _euaNoExterior + ' ' +
    // _euaNoInterior + ' ' +
    // _euaEntreCalles + ' ' +
    // _euaCP + ' ' +
    // _euaTaxID + ' ' +
    // _euatelefono + ' ' +
    // checkBoxModule_Demo_1 + ' ' +
    // checkBoxModule_Demo_2 + ' ' +
    // checkBoxModule_Demo_3 + ' ' +
    // checkBoxModule_Demo_4 + ' ' +
    // checkBoxModule_Demo_5 + ' ' +
    // checkModule_others_1 + ' ' +
    // checkModule_others_2 + ' ' +
    // checkModule_others_3 + ' ' +
    // checkModule_others_4 + ' ' +
    // checkModule_others_5 + ' ' +
    // checkModule_others_6 + ' ' +
    // checkModule_others_7 + ' ' +
    // checkModule_others_8 + ' ' +
    // checkModule_others_9 + ' ' +
    // checkModule_others_10 + ' ' +
    // checkModule_others_11 + ' ' +
    // checkModule_others_12 + ' ' +
    // checkModule_others_13 + ' ' +
    // checkModule_others_14 + ' ' +
    // checkModule_others_15 + ' ' +
    // checkModule_others_16
    //)
});

module.exports = router;