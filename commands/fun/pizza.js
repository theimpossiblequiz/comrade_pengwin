module.exports = {
    name: 'pizza',
    categories: 'fun',
    description: "pizza command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('Here have a slice of pizza: https://tenor.com/5s9F.gif');
    }
}