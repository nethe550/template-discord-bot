const Event = require('../structures/Event.js');

module.exports = new Event('messageCreate', (client, message) => {

    // ignore bot messages
    if (message.author.bot) return;

    // ignore messages without prefix
    if (!message.content.startsWith(client.config.bot.prefix)) return;

    // extract args from raw message string
    const args = message.content.substring(client.config.bot.prefix.length).split(/ +/);

    // dynamically find command from name
    const command = client.getCommand(args[0]);

    // respond with failure if command is not found
    if (!command) return message.channel.send(`Invalid command '${args[0]}'.`);

    // check if user has permission to use command
    const permission = message.author.permissions.has(command.permission);

    // respond with failure if member does not have permission
    if (!permission) return message.channel.send(`Insufficient permission. (Missing '${command.permission}')`);

    // execute command
    command.run(message, args, client);

});