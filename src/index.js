//Requires
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

//Initializations
const app = express();
require('./database');
require('./config/passport');

//Settings
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

//MiddleWares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//Routes
/*RUTAS EXTERNAS*/
app.use(require('./routes/web-main/main')); //PRINCIPAL (LogIn, Request)
app.use(require('./routes/web-main/request')); //SEND REQUEST
app.use(require('./routes/web-main/sign_in')); //LOGIN

/*RUTAS INTERNAS*/
app.use(require('./routes/internal/withing')); //DENTRO
app.use(require('./routes/internal/notes')); //NOTAS
app.use(require('./routes/internal/clientes')); //CLIENTES
app.use(require('./routes/internal/sign_out')); //AFUERA
app.use(require('./routes/internal/master')); //MASTER
app.use(require('./routes/internal/empleados')); //EMPLEADOS

//Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'private')));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});