const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/despacho/viajes', (req, res) => {
    res.render('external/clientes/Despacho/viajes');
});
module.exports = router;