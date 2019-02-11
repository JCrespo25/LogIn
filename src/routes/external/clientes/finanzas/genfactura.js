const express = require('express');
const router = express.Router();

/*CONDUCTORES*/
router.get('/finanzas/genfactura', (req, res) => {
    res.render('external/clientes/Finanzas/genfactura');
});
module.exports = router;