// retorna uma função, mas não chama é possível
// alterar para require('express')(); para executá-la
var express = require('express');
var app = express();

app.listen(3000, function () {
    console.log("Servidor iniciado com express.");
})

app.get('/', function (req, resp) {
    resp.send("<html><body>Portal de notícias.</body></html>");
});

app.get('/tecnologia', function (req, resp) {
    resp.send("<html><body>Portal de notícias de tecnologia.</body></html>");
})
