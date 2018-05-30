// Nota: O NodeJS possibilita atender a diversas requisições simultâneas sem dar deadlock ou negá-las.

// após a alteração de um arquivo é necessário reiniciar o servidor
// o nodejs quando iniciado cria um processo que deve ser destruído e reiniciado

// require permite acrescentar páginas, módulos ou bibliotecas ao script
var http = require('http');

// a maioria das funções espera uma função como argumento

// cria-se um servidor através da biblioteca http
// o servidor espera um pedido e retorna uma resposta
var server = http.createServer(function (req, res) {

    // obtenho path, após o domínio
    var path = req.url;

    if (path == '/tecnologia') {
        res.end("<html><body>Portal de notícias de tecnologia.</body></html>")
    } else if (path == '/moda') {
        res.end("<html><body>Portal de notícias de moda.</body></html>")
    } else if (path == '/beleza') {
        res.end("<html><body>Portal de notícias de beleza.</body></html>")
    } else {
        res.end("<html><body>Portal de notícias.</body></html>")
    }

});

// além disso, é necessário especificar a porta de escuta
// o que pode ser feito dessa forma,

// http.createServer(function (req, res) {
//     res.end("<html><body>Portal de notícias.</body></html>")
// }).listen(3000);

// ou

server.listen(3000);
