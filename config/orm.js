var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
	
	readEverything: function (cb) {
//		console.log ("got to read everything");
//		 connection.query('SELECT * FROM events;', function(err, data) {
		 connection.query('SELECT * FROM my_new_list;', function(err, data) {
//		 	console.log (data);
		 	cb (data);
		});
	},

	insertRecord: function (taskLanguage, check_box, cb) {

	//	console.log ("task language = ", taskLanguage, "check_box = ", check_box);
		var x = "('" + taskLanguage + "', false)";

		var queryString = "INSERT INTO my_new_list (task, check_box) VALUES ";

		queryString = queryString.concat(x);
		console.log ( "queryString = ", queryString );

		connection.query(queryString, function (err, result) {
			//if (err) throw err		//	cb(result);
			cb (err);
			});
		}
};

module.exports = orm;
