const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const server = express();
server.use(cookieParser());
server.use(express.static(path.resolve('../client')));

server.get('/cookies', (req, res) => {
    console.log(req.cookies);
    res.send('Grandma sent me some cookies!');
})

server.listen(3000);