const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    res.send('Agregando notas');
});


module.exports = router;