// var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var enforce = require('express-sslify');

var app = express();
// put it as one of the first middlewares, before routes
app.use(enforce.HTTPS()); 

var path = require('path');
var serveStatic = require('serve-static');
// app.use(sslRedirect());
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);