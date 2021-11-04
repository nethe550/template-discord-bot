# Template Discord Bot
A template Discord bot for Discord.js v13.

## Setup
To run this bot you will need to install [Node.js](https://nodejs.org/en/).

### Bot Setup

You will need to set up a Discord Application, found [here](https://discord.com/developers/applications).

Once you create a new application, go to the *Bot* tab and create a new bot.

Inside the directory you cloned this repository to, run these commands:

Install packages:
- `npm install`

Start bot:
- `npm start`
  
Configuring the bot is easy, just edit the `config.json` found in the root of the project:

Configuration (inside `config.json`):
- `token`: this is the bot token, which can be found under the *Bot* tab in the Discord Application. (DO NOT SHARE THIS WITH ANYONE!)
- `prefix`: can be any character(s) you want; defines the start of a command. (e.g. "~help" or "!help")

### Inviting the Bot
```NOTE: You need Administrator permissions in the server you want to add this bot to!```

To invite the bot to your server, go to the *OAuth2* tab and click the "bot" checkbox

In the *OAuth2* tab, make sure to scroll down to the "Bot Permissions" section and select these permissions:
- View Channels
- Send Messages
- Manage Messages
- Embed Links
- Read Message History
(You may select more permissions depending on what features you add to the bot)

After selecting the permissions, copy the link at the bottom of the *OAuth2* section, and open it.
This will bring up a Discord modal telling you which server to put the bot in, and to accept the required permissions.

After this, the bot should be in your server!

## Adding Commands & Events
There are `command.template.js` and  `event.template.js` files located in `./src/commands/` and `./src/events` respectively.
These files contain a template for adding new commands and events to the bot.
Simply put your command / event logic within the `run` function, and the bot will automatically assign them on the next restart.

## License
You are free to use this project under the terms defined in the MIT License (included in `LICENSE` file).
