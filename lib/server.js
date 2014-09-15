var fs          = require('fs');
var express     = require('express');
var nunjucks    = require('nunjucks');

var app = module.exports = express();

nunjucks.configure( 'views', {
  autoescape: true
, express:    app
});

app.use( require('method-override')() );
app.use( require('body-parser').json() );
app.use( require('body-parser').urlencoded({ extended: true }) );

app.use( function( req, res, next ){
  res.locals.port = app.get('port');
  next();
});

app.use( express.static( __dirname + '/../public' ) );

app.get( '/', function( req, res ){
  res.send('ohai');
});