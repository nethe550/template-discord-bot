const Client = require('./structures/Client.js');
const config = require('../config.json');

// clear previous stdout
console.clear();

// instantiate the client
const client = new Client(config).start();