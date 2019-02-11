const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/reportes/choferes', (req, res) => {
    res.render('external/clientes/Reportes/choferes');
});
module.exports = router;