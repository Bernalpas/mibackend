
//1 Importar las librerías
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

//2. Creamos la app
const app = express();

//3. Middleware
//3.1 Front
app.use(express.static(path.join(__dirname, 'public')));

//3.2 Back
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Exportamos la app
module.exports = app;



