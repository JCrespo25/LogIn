const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/clientes/borradores', (req, res) => {
    res.render('external/clientes/Borradores/borradores');
});
module.exports = router;