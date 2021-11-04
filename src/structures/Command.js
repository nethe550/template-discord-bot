const Discord = require('discord.js');
const Client = require('./Client.js');

/**
 * The function ran when the command is executed.
 * @param {Discord.Message} message The message object recieved as a command
 * @param {string[]} args The command arguments
 * @param {Client} client The client recieving the command
 * @returns {boolean} succeeded?
 */
const RunFunction = (message, args, client) => { return true; };

class Command {

    /**
     * Creates a new instance of a command.
     * @typedef {{ name: string, description: string, usage: string, permission: Discord.PermissionString, run: RunFunction }} CommandOptions
     * @param {CommandOptions} options The command parameters
     */
    constructor(options) {

        /**
         * @type {string}
         */
        this.name = options.name;

        /**
         * @type {string}
         */
        this.description = options.description;

        /**
         * @type {string}
         */
        this.usage = options.usage;

        /**
         * @type {Discord.PermissionString}
         */
        this.permission = options.permission;

        /**
         * @type {RunFunction}
         */
        this.run = options.run;

    }

}

module.exports = Command;