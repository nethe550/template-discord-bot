const Event = require('../structures/Event.js');

// log bot user's tag on 'ready' event
module.exports = new Event('ready', (client) => console.info(`Bot started as ${client.user.tag}.`));