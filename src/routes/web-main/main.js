const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('web-main/web-main');
});

module.exports = router;