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
/*RUTAS MAIN*/
app.use(require('./routes/web-main/main')); //PRINCIPAL (LogIn, Request)
app.use(require('./routes/web-main/request')); //SEND REQUEST
app.use(require('./routes/web-main/sign_in')); //LOGIN

// RUTAS EXTERNAS
app.use(require('./routes/external/clientes/dashboard')); //CLIENTES
app.use(require('./routes/external/clientes/catalogo/conductores')); //CONDUCTORES
app.use(require('./routes/external/clientes/catalogo/unidades')); //UNIDADES
app.use(require('./routes/external/clientes/catalogo/verconductores')); //VERCONDUCTORES
app.use(require('./routes/external/clientes/catalogo/verunidades')); //VERUNIDADES
app.use(require('./routes/external/clientes/catalogo/cajas')); //CAJAS
app.use(require('./routes/external/clientes/catalogo/mercancias')); //MERCANCIAS
app.use(require('./routes/external/clientes/catalogo/paises')); //PAISES
app.use(require('./routes/external/clientes/catalogo/estados')); //ESTADOS
app.use(require('./routes/external/clientes/catalogo/ciudades')); //CIUDADES
app.use(require('./routes/external/clientes/catalogo/sedes')); //SEDES
app.use(require('./routes/external/clientes/catalogo/rutas')); //RUTAS
app.use(require('./routes/external/clientes/catalogo/servicios')); //SERVICIOS
app.use(require('./routes/external/clientes/catalogo/unidadmedida')); //UNIDADDEMEDIDA
app.use(require('./routes/external/clientes/reportes/viajes')); //REPVIAJES
app.use(require('./routes/external/clientes/reportes/unidades')); //REPUNIDADES
app.use(require('./routes/external/clientes/reportes/cajas')); //REPCAJAS
app.use(require('./routes/external/clientes/reportes/choferes')); //REPCHOFERES
app.use(require('./routes/external/clientes/finanzas/genfactura')); //FINFACTURA
app.use(require('./routes/external/clientes/finanzas/remision')); //FINREMISION
app.use(require('./routes/external/clientes/finanzas/cobranza')); //FINCOBRANZA
app.use(require('./routes/external/clientes/despacho/viajes')); //DESPVIAJES
app.use(require('./routes/external/clientes/despacho/crearviajes')); //DESPCREARVIAJES
app.use(require('./routes/external/clientes/almacen')); //ALMACEN
app.use(require('./routes/external/clientes/mantenimiento')); //MANTENIMIENTO 
app.use(require('./routes/external/clientes/alertas')); //ALERTAS
app.use(require('./routes/external/clientes/borradores')); //BORRADORES

/*RUTAS INTERNAS*/
app.use(require('./routes/internal/withing')); //DENTRO
app.use(require('./routes/internal/notes')); //NOTAS
app.use(require('./routes/internal/clientes')); //CLIENTES
app.use(require('./routes/internal/sign_out')); //AFUERA
app.use(require('./routes/internal/master')); //MASTER
app.use(require('./routes/internal/empleados')); //EMPLEADOS
app.use(require('./routes/internal/verempleados')); //VEREMPLEADOS

//Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'private')));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});