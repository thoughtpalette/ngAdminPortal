var express = require( "express" );
var http    = require( "http" );
var app     = express();

app.use( express.static( __dirname ) );
app.set( "view engine", "ejs" );
app.set( "views", __dirname );

var serveIndex = function ( req, res, next )
{
	res.render( "index", { STATIC_PATH: process.env.STATIC_PATH || "/" } );
};

app.route( "*" ).get( serveIndex );

var port = process.env.PORT || 3000;
http.createServer( app ).listen( port );
console.log( "Express listening on " + port )
