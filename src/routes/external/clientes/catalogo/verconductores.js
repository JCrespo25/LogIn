const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/verconductores', (req, res) => {
    res.render('external/clientes/Catalogo/verconductores/verconductores');
});
module.exports = router;