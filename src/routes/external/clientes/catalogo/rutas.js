const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/rutas', (req, res) => {
    res.render('external/clientes/Catalogo/rutas/rutas');
});
module.exports = router;