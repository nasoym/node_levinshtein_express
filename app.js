var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.get('/', function (req, res) {
  res.send("hello world\n");
})

app.post('/json', bodyParser.json(), function (req, res) {
  console.log("body: ", req.body);
  res.send("hello world\n");
})

 app.post('/raw', bodyParser.raw(), function (req, res) {
  console.log("body: " + req.body.toString());
  res.send("hello world\n");
})

app.post('/text', bodyParser.text({type:"*/*"}), function (req, res) {
  var body = req.body;
  var firstLine = body.split('\n')[0];
  var secondLine = body.split('\n')[1];
  var response = "first: " + firstLine;
  response += "\n";
  response += "second: " + secondLine;
  response += "\n";
  res.send(response);
})

app.listen(8080)
