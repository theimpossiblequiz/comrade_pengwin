module.exports = {
    name: 'tik',
    categories: 'fun',
    description: 'idk',
    async execute(message, args, cmd, client, Discord){
        //importing
        const { tictactoe } = require('reconlx')

        // parameters
         /**
        * @name tictactoe
        * @param {Object} options options
        * @param {any} [options.message] parameter used for message event
        * @param {any} [options.player_two] second player in the game.
        */

        // start the game

        var game = new tictactoe({
        message: message,
        player_two : message.mentions.members.first(),
            
    
    })




    }
}