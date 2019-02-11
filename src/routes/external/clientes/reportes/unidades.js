const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/reportes/unidades', (req, res) => {
    res.render('external/clientes/Reportes/unidades');
});
module.exports = router;