const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/verunidades', (req, res) => {
    res.render('external/clientes/Catalogo/verunidades/verunidades');
});
module.exports = router;