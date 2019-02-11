const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/reportes/cajas', (req, res) => {
    res.render('external/clientes/Reportes/cajas');
});
module.exports = router;