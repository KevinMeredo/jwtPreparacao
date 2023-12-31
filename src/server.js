require('./database');

const express = require('express');
const { routes } = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(8080, () => {
    console.log('🚀 Server 8080 started!');
});