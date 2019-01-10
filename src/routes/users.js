const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    console.log(req.body);
    const errors = [];

    if (name == '') {
        errors.push({ text: 'Ingrese su nombre' });
    }
    if (email == '') {
        errors.push({ text: 'Ingrese su correo' });
    }
    if (password == '') {
        errors.push({ text: 'Ingrese su contraseña' });
    }
    if (confirm_password == '') {
        errors.push({ text: 'Confirme contraseña' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' });
    }
    if (password.lenght <= 4) {
        errors.push({ text: 'La contraseña tiene que ser mayor a cuatro caracteres' });
    }

    if (errors.length > 0) {
        console.log(errors.lenght);
        res.render('users/signup', { errors, name, email, password, confirm_password });
    } else {
        console.log(errors.lenght);
        res.send('ok');
    }
});

module.exports = router;