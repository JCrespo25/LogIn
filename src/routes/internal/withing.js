const express = require('express');
const router = express.Router();
const RequestDEMO = require('../../models/profiles/externos/solicitudesDEMO');
const { isAuthenticated } = require('../../helpers/auth');

/*INDEX*/
router.get('/SYS/index', isAuthenticated, (req, res) => {
    res.render('internal/inicio/index');
});



module.exports = router;