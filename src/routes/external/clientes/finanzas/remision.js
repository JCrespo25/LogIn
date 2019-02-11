const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/finanzas/remision', (req, res) => {
    res.render('external/clientes/Finanzas/remision');
});
module.exports = router;