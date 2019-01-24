const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('users/sign');
});

// router.get('/about', (req, res) => {
//     res.render('about');
// });

module.exports = router;