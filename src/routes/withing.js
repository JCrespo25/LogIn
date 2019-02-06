const express = require('express');
const router = express.Router();
const RequestDEMO = require('../models/profiles/externos/solicitudesDEMO');
const { isAuthenticated } = require('../helpers/auth');

/*DASHBOARD*/
router.get('/SYS/dashboard', isAuthenticated, (req, res) => {
    res.render('internal/dashboard');
});

/*CLIENTES*/
router.get('/SYS/clientes', isAuthenticated, (req, res) => {
    res.render('internal/clientes');
});

/*SOLICITUDES*/
router.get('/SYS/solicitudes', isAuthenticated, async(req, res) => {
    const solicitantes = await RequestDEMO.find(req._id).sort({ date: 'desc' });
    res.render('internal/solicitudes', { solicitantes });
});

router.get('/notes', isAuthenticated, async(req, res) => {});

module.exports = router;