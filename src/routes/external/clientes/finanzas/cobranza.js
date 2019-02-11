const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/finanzas/cobranza', (req, res) => {
    res.render('external/clientes/Finanzas/cobranza');
});
module.exports = router;