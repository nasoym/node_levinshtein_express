var express = require('express')
var bodyParser = require('body-parser')
var Levenshtein = require('levenshtein')

var app = express()

app.post('/', bodyParser.text({type:"*/*"}), function (req, res) {
  if (process.env.DEBUG=="1") {
    console.error(req);
  }
  var body = req.body;
  var firstLine = body.split('\n')[0];
  var secondLine = body.split('\n')[1];
  var levenshtein = new Levenshtein(firstLine, secondLine);
  var response = "distance: " + levenshtein.distance + " \n";
  if (process.env.DEBUG=="1") {
    console.error(response);
  }
  res.send(response);
})

app.listen(8080)
