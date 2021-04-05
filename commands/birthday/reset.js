const birthdaySchema = require('../../models/birthdaySchema');

module.exports = {
    name: 'reset',
    aliases: ['bdreset'],
    categories: 'birthday',
    description: 'This will allow a user to reset thier birthday if they have entered it wrong.',
    async execute(message, args, cmd, client, Discord){
        const user = message.mentions.users.first() || message.author;
        birthdaySchema.findOneAndDelete({ userID: user.id }, async(err, data) => {
            if(!data) return message.reply('This user data has been reset!')
        })
    }
}