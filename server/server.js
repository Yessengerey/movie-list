var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db/db.js');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.post('/movies', function(req, response) {
  console.log(req.body);
  db.query(`INSERT INTO movies (id, title) VALUES (${req.body.id}, '${req.body.title}')`, function(err, res, fields) {
    if (err) {
      throw err;
    }

    console.log('REQ', res);
    response.send('DONE');
  })
});

app.listen(3000, function() {
  console.log('Listening to', 3000);
});
