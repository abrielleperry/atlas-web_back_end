const http = require('http');
const fs = require('fs');
const path = require('path');
const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    res.end();
  }

});

app.listen(1245);
module.exports = app;
