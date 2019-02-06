const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/clientes/dashboard', (req, res) => {
    res.render('external/clientes/Dashboard/dashboard');
});
module.exports = router;