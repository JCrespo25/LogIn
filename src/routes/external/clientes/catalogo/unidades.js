const express = require('express');
const router = express.Router();

/*UNIDADES*/
router.get('/catalogo/unidades', (req, res) => {
    res.render('external/clientes/Catalogo/unidades/unidades');
});
module.exports = router;