const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/clientes/mantenimiento', (req, res) => {
    res.render('external/clientes/Mantenimiento/mantenimiento');
});
module.exports = router;