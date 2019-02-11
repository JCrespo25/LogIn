const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/servicios', (req, res) => {
    res.render('external/clientes/Catalogo/servicios/servicios');
});
module.exports = router;