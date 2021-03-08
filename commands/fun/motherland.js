module.exports = {
    name: 'motherland',
    categories: 'fun',
    description: "land command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('The motherland is Australia.');
        message.react('775728289024835636');
    }
}