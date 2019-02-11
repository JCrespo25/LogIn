const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/despacho/crearviajes', (req, res) => {
    res.render('external/clientes/Despacho/crearviajes');
});
module.exports = router;