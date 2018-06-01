// retorna uma função, mas não chama. É possível
// alterar para require('express')(); para executá-la
// var msg = require('./mod_test'); // recomenda-se ./, antes de importar um módulo
var express = require('express');
var app = express();

// para usar o ejs como engine de view é necessário informar
// na tabela de propriedades do express essa alteração
app.set('view engine', 'ejs');
// especifica qual será o diretório das views do ejs
// o caminho deverá ser a partir de onde o require para este módulo foi utilizado
app.set('views', './app/views');

module.exports = app;
