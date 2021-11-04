const Discord = require('discord.js');
const Command = require('../structures/Command.js');

module.exports = new Command({

    name: 'ping',
    description: 'Pings the bot and the Discord API.',
    usage: 'ping',
    permission: Discord.Permissions.FLAGS.SEND_MESSAGE,

    async run(message, args, client) {

        const msg = await message.channel.send(`API Ping: ${client.ws.ping}ms.`);

        return msg.edit(`API Ping: ${client.ws.ping}ms.\nMessage Ping: ${msg.createdTimestamp - message.createdTimestamp}ms.`);

    }

});