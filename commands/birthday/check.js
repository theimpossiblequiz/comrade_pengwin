const birthdaySchema = require('../../models/birthdaySchema');

module.exports ={
    name: 'check',
    aliases: [],
    categories: 'birthday',
    description: 'idk bro',
    async execute(message, args, cmd, client, Discord){
        const user = message.mentions.users.first() || message.author;
        birthdaySchema.findOne({ userID: user.id }, async(err, data) => {
            if(!data) return message.reply('This user does not exist or has not set a birthday!')
            message.channel.send(`${user} birthday is on ${data.birthday}`);
        })
    }
}