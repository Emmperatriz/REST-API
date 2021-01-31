const express = require('express');
const app = express();

//Configuración del Servidor
app.set('port', process.env.PORT || 3000); //process.env.PORT-> En caso de que algun SO nos de un puerto para trabajar.

//Middelwares

app.use(express.json()); //Acceder a los archivos JSON
//Rutas
app.use(require('./routes/restaurants'));
//Inicializando el Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
});