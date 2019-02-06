const express = require('express');
const router = express.Router();

/*ALTA CLIENTE*/
router.get('/SYS/empleados/altaEmpleados', (req, res) => {
    res.render('internal/empleados/altaEmpleados');
});

module.exports = router;