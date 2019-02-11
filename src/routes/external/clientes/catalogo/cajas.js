const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/cajas', (req, res) => {
    res.render('external/clientes/Catalogo/cajas/cajas');
});
module.exports = router;