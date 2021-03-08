module.exports = {
    name: 'hang',
    categories: 'fun',
    description: 'I LIKE TO HANG!!!',
    async execute(message, args, cmd, client, Discord){
        //importing
        const { hangman } = require('reconlx')

        // parameters
        /**
        * @name hangman
        * @param {Object} options options
        * @param {String} [options.channelID] channel to send to (channel.id)
        * @param {any} [options.message] parameter used for message event
        * @param {String} [options.permission] required permission to use this command (optional); default set to everyone.
        * @param {String} [options.word] word that needed to be guessed
        * @param {any} [options.client] client used to defined Discord.Client
        */

        // making hangman
            const hang = new hangman({
                message: message,
                word:  args.slice(1).join(" "),
                client: client,
                channelID: message.mentions.channels.first()
        })

    // starting the game
        hang.start()
    }
}