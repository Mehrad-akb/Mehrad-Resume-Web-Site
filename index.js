const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  // Define the path to the HTML file
  const filePath = path.join(__dirname, 'index.html');
  // Read the HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Send a 500 error if there is an issue reading the file
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end(err);
    } else {
      // Send the HTML file as the response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
