var express = require('express');
var app = express();

//const hostname = '127.0.0.1';
//const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

app.get('/', function(req, res) {
  res.end('Hello World');
});

app.listen(process.env.PORT || 80, function () {
  console.log('Server running at');
});