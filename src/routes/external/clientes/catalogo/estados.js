const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/estados', (req, res) => {
    res.render('external/clientes/Catalogo/estados/estados');
});
module.exports = router;