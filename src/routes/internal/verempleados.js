const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/SYS/empleados/verEmpleados', (req, res) => {
    res.render('internal/empleados/verEmpleados');
});

module.exports = router;