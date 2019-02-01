const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isAuthenticated } = require('../../helpers/auth');

router.post('/main/sign_in', passport.authenticate('local', {
    successRedirect: '/SYS/index',
    failureRedirect: 'web-main/web-main',
    failureFlash: true
}));

module.exports = router;