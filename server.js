const express = require ('express');
const bodyParser = require('body-parser');
const response = require('../network/response');

const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/mensaje', function (req, res) { 
    console.log(req.headers);
    res.header({
        "custom-headers": "un valor personalizado",
    });
    response.success(req, res, 'Hola viejito estamos usando node');
    // res.send('Hola viejito');
});

router.post('/mensaje', function (req, res) { 
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'error simulado');
    } else {
        response.success(req, res, 'piola', 201);
    }
});


app.use('/app', express.static("public"));

app.listen(3000)

console.log('la app está escuchando en http://localhost:3000');


