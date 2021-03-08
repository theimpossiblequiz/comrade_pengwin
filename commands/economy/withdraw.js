const { execute } = require("./balance");
const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'withdraw',
    aliases: ['wd'],
    cooldown: 0,
    categories: 'economy',
    description: 'This allows a user to take money out of the bank!',
    async execute(message, args, cmd, client, Discord, profileData){
        const amount = args[0];
        if(amount % 1 !=0 || amount <= 0) return message.channel.send('Deposit amount has to be a whole number!');

        try{
            if(amount > profileData.bank) return message.reply(`You do not have enough eddies to take out of the bank! You only have \`${profileData.bank}\``);

            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    eddies: amount,
                    bank: - amount
                }
            });

            let wdEmbed = new Discord.MessageEmbed()
            .setTitle('MONEY WITHDRAWN')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor("RED")
            .setDescription(`${message.author.username}, you have withdrawn \`$${amount}\` from you bank account!`)
            .setTimestamp()
            .setFooter(`${message.author.username} Withdrawal Receipt`);

            return message.channel.send(wdEmbed);
        }catch(err){
            console.log(err);
        }
    },

}