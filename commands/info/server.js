module.exports = {
    name:'server',
    categories: 'info',
    description: 'Tells you the ame of the server',
    execute (message, args, cmd, client, Discord) {
        message.channel.send(`The server/guild name is: ${message.guild.name}`);
    }
}