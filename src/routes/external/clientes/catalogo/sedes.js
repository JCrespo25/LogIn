const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/sedes', (req, res) => {
    res.render('external/clientes/Catalogo/sedes/sedes');
});
module.exports = router;