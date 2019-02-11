const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/ciudades', (req, res) => {
    res.render('external/clientes/Catalogo/ciudades/ciudades');
});
module.exports = router;