var express = require('express');
var bodyParser = require('body-parser');
var orm = require('./config/orm.js');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var mysql      = require('mysql');


app.get('/', function(req,res) {
//  console.log ("going to read everything");
    orm.readEverything( function (data) {
    res.render('index', {things : data});
    });
});


//post route -> back to home
app.post('/create', function(req, res) {
	console.log ("create res = ", req.body.task);
//	orm.insertRecord (req.body.task, false);  

	orm.insertRecord (req.body.task, false, function(err) {
		console.log ("GOT BACK FROM INSERT RECORT!! = ", err);
		orm.readEverything( function (data) {
    	res.render('index', {things : data});
    });

	});
});


var port = 3000;
app.listen(port);
