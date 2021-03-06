const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://diegoMierez:labrumier22@cursonode-i4ley.mongodb.net/test?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');