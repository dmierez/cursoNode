const express = require ('express');
const bodyParser = require('body-parser');
const response = require('./network/response');

const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/message', function(req, res) {
    console.log(req.headers);
    res.header({
        "custom-hearder": "nuestro valor personalizado",
    })
    // res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res) {
    console.log(req.query);
    if (req.query.error == 'ok') {
        response.error(req, res, 'error simulado');
    } else {
        response.success(req, res, 'creado correctamente', 201);
    }
    // res.status(201).send({error: '', body: 'creado correctamente'});
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La app está escuchando en http://localhost:3000')
