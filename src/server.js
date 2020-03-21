
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const port = process.env.PORT || 8083;

app.use(express.static(__dirname + '/dist/sd-scattergories'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));