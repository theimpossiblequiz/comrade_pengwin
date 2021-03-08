module.exports = {
    name: 'pog',
    categories: 'fun',
    aliases: ['poggers', 'Pog'],
    cooldown: 10,
    permission: ["SEND_MESSAGES"],
    description: "pog command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('https://tenor.com/view/gh-poggers-spin-xqc-fortnite-gif-17316982');
    }
}