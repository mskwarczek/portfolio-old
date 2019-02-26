const express = require('express');
const path = require('path');

const server = express();

server.use('/build/', express.static(path.join(__dirname, 'build')));
server.use('/build/pictures', express.static(path.join(__dirname, 'build', 'pictures')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = server;

const port = process.env.PORT || 5000;
server.listen(port);
console.log(`Server is listening on port ${port}`);
