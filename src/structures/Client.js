const { readdirSync } = require('fs');
const Discord = require('discord.js');

const Command = require('./Command.js');
const Event = require('./Event.js');

class Client extends Discord.Client {

    /**
     * Instantiates a Discord Client instance.
     * @typedef {{ bot: { token: string, prefix: string }, app: { tableWidth: number } }} ClientOptions
     * @param {ClientOptions} config The client's configuration
     */
    constructor(config) {

        super({
            // The client intents:
            // These define the scope of the client; unless otherwise required, these default intents will work fine.
            intents: [
                Discord.Intents.FLAGS.GUILDS,
                Discord.Intents.FLAGS.GUILD_MESSAGES
            ],
            // prevents the client from @ mentioning users
            allowedMentions: { repliedUser: false }
        });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();

        /**
         * @type {ClientOptions}
         */
        this.config = config;

    }

    /**
     * Starts and connects the client to the Discord API.
     * @param {string} token A custom bot token in the case you want to override the config.json token
     * @returns {boolean} succeeded?
     */
    start(token=null) {

        try {

            if (!this.config.app.tableWidth) this.config.app.tableWidth = 32;
    
            console.log('='.repeat(this.config.app.tableWidth));
    
            // === dynamically load commands === //
            console.log('\tCommands');
    
            readdirSync("./src/commands").filter(file => (file.endsWith('.js') || file.endsWith('.mjs')) && (!file.endsWith('.template.js') || !file.endsWith('.template.mjs')))
                .forEach(file => {
    
                    /**
                     * @type {Command}
                     */
                    const commandModule = require(`../commands/${file}`);
    
                    console.info(` - Loaded command '${commandModule.name}'.`);
    
                    // add commandModule to this.commands
                    this.commands.set(commandModule.name, commandModule);
    
                });
    
            console.log('='.repeat(this.config.app.tableWidth));
    
            // === dynamically load events === //
            console.log('\tEvents');
    
            readdirSync('./src/events').filter(file => (file.endsWith('.js') || file.endsWith('.mjs')) && (!file.endsWith('.template.js') || !file.endsWith('.template.mjs')))
                .forEach(file => {
    
                    /**
                     * @type {Event}
                     */
                    const eventModule = require(`../events/${file}`);
    
                    console.info(` - Loaded event '${eventModule.event}'.`);
    
                    // assign event module and bind this to event module's run
                    this.on(eventModule.event, eventModule.run.bind(null, this));
    
                });
            
            console.log('='.repeat(this.config.app.tableWidth));
            
            console.log('\n'.repeat(2));

            // connect bot to Discord API
            this.login(token ? token : this.config.bot.token);
            
            return true;

        }
        catch (e) {

            console.error(e);
            return false;

        }

    }

    /**
     * Checks if the command name is a valid command.
     * @param {string} name The name of the command
     * @returns {boolean} command exists?
     */
    isCommand(name) {

        return this.commands.has(name);

    }

    /**
     * Gets a command object by name.
     * @param {string} name The name of the command
     * @returns {Command | null} The command object, or if it doesn't exist, null
     */
    getCommand(name) {

        if (!this.isCommand(name)) return null;

        return this.commands.get(name);

    }

    /**
     * Capitalizes a string in Title-case format.
     * @param {string} str The string to capitalize
     * @returns {string} The formatted string
     */
    static CapitalizeString(str) {

        return str.trim()
            .toLowerCase()
            .replace(/\w\S*/g, (w) => {
                w.replace(/^\w/, (c) => {
                    c.toUpperCase();
                });
            });

    }

}

module.exports = Client;