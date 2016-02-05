var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');

// Módulo que usaremos para obtener el middleware de la autenticación
var express_jwt = require('express-jwt');

var models = require('./models');

// config.js es un fichero con constantes
var config = require('./config');

// Conectamos a la BD
mongoose.connect(config.db_path);

// Inicializamos los modelos
models.initialize();

var app = express();

// Middleware que parsea el body
app.use(bodyParser.json());

// Importamos los módulos enrutadores

var authRouter = require('./routes/authenticate.router');

// Y los usamos para los caminos que toquen
app.use('/authenticate', authRouter);

http.createServer(app).listen(8080);









