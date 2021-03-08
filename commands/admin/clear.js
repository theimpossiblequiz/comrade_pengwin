module.exports = 
{
    name: 'clear',
    categories: 'admin',
    description: 'Clear Messages!',
    async execute(message, args, cmd, client, Discord)
    {
        let deleteAmount;

        if(isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!').then((msg) => {msg.delete({timeout: 10000})}); }

        if(parseInt(args[0]) > 100){
            return message.reply('You can only delete 100 messages at a time!').then((msg) => {msg.delete({timeout: 10000})});
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true);
        message.reply(`**Successfully** Deleted ***${deleteAmount}*** Messages.`).then((msg) => {msg.delete({timeout: 10000})});
    }
}