const Discord = require('discord.js');
const Client = require('./Client.js');

/**
 * The function ran when the event is recieved.
 * @template {keyof Discord.ClientEvents} K
 * @param {Client} client The client instance recieving the event
 * @param {Discord.ClientEvents[K]} eventArgs The event arguments
 * @returns {boolean} succeeded?
 */
const RunFunction = (client, ...eventArgs) => { return true; };

/**
 * @template {keyof Discord.ClientEvents} K
 */
class Event {

    /**
     * Creates a new instance of an event.
     * @param {K} event The event to recieve
     * @param {RunFunction<K>} run The function to run when the event is recieved
     */
    constructor(event, run) {

        /**
         * @type {K}
         */
        this.event = event;
        
        /**
         * @type {RunFunction<K>}
         */
        this.run = run;

    }

}

module.exports = Event;