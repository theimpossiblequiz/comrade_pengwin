module.exports = 
{
    name: 'close',
    aliases: ['done', 'ticketclose'],
    cooldown: 0,
    categories: 'support',
    description: 'Close Ticket',
    execute(message, args, cmd, client, Discord){
        if(!message.member.roles.cache.has('782867499266867251')) return message.reply('You do not have permissions to use this command!');

        message.channel.delete();
    }
}