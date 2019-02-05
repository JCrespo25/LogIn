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

module.exports = router;