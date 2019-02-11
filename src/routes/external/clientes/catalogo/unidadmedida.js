const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/unidadmedida', (req, res) => {
    res.render('external/clientes/Catalogo/unidadmedida/unidadmedida');
});
module.exports = router;