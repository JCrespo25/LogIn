const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/clientes/almacen', (req, res) => {
    res.render('external/clientes/Almacen/almacen');
});
module.exports = router;