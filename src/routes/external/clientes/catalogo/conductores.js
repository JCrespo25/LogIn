const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/conductores', (req, res) => {
    res.render('external/clientes/Catalogo/conductores/conductores');
});
module.exports = router;