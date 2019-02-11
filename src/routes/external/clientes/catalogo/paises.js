const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/paises', (req, res) => {
    res.render('external/clientes/Catalogo/paises/paises');
});
module.exports = router;