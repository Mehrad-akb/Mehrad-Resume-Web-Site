
const express = require('express')
const path = require('path');

const app = express()

const hostname = 'localhost';
const port = 8080;

app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})


