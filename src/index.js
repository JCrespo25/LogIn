const express = require('express');
//Initializacion
const app = express();
//Settings
app.set('port',process.env.PORT || 3000);
//MiddleWares

//Global Variables

//Routes

//Static Files

//Server is listening

app.listen(app.get('port'), () => 
{
    console.log('server on port', app.get('port');
});