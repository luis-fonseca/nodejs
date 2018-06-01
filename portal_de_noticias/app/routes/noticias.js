// a função para funcionar corretamente precisa da referência do módulo app
// não é possível somente atribuir o retorno de app.get
module.exports = function (app) {
    return app.get('/noticia', function (req, resp) {
        resp.render('noticias/noticias');
    });
};


