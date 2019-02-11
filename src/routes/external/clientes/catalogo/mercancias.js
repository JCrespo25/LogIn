const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/catalogo/mercancias', (req, res) => {
    res.render('external/clientes/Catalogo/mercancias/mercancias');
});
module.exports = router;