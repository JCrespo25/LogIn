const express = require('express');
const router = express.Router();

router.get('/users/sigin', (req, res) => {
    res.send('SIGIN');
});

router.get('/users/sigup', (req, res) => {
    res.send('SIGNUP');
});

module.exports = router;