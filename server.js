const express = require('express');

const db = require('./data/config.js');

const server = express();

server.use(express.json());

module.exports = server;