//.toLowerCase clothesitem + s

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'plantlife',
  database : 'moviesdb'
});

connection.connect();

module.exports = connection;
