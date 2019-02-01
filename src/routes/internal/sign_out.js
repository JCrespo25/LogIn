const express = require('express');
const router = express.Router();

router.get('/users/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});


module.exports = router;