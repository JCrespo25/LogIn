const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/clientes/alertas', (req, res) => {
    res.render('external/clientes/Alertas/alertas');
});
module.exports = router;