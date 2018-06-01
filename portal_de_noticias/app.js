var app = require('./config/server');
var rotaHome = require('./app/routes/home');
var rotaNoticias = require('./app/routes/noticias');
var rotaInclusaoDeNoticias = require('./app/routes/form_add_noticia');

app.listen(3000, function () {
    // console.log("Servidor iniciado com express.");
    console.log("Servidor iniciado.");
    // console.log(msg); // quando retorna o valor de uma variável
    // caso retorne uma função é necessário executar a função através do ()
    // ou no require, após o nome do módulo, chamar a função var msg = require('./mod_test')();
    // console.log(msg());

})

rotaHome(app);
rotaNoticias(app);
rotaInclusaoDeNoticias(app);

// app.get('/tecnologia', function (req, resp) {
//     // resp.send("<html><body>Portal de notícias de tecnologia.</body></html>");
//     // ao trabalhar com ejs e depois de ter alterado a tabela de propriedades do express
//     // para renderizar uma página é necessário criar o diretório views
//     resp.render('secao/tecnologia');
// })
