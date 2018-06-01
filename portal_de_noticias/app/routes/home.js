module.exports = function (app) {
    return app.get('/', function (req, resp) {
        resp.render('home/index')
    });
};
