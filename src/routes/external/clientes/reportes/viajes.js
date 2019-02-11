const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/reportes/viajes', (req, res) => {
    res.render('external/clientes/Reportes/viajes');
});
module.exports = router;