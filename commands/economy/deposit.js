const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'deposit',
    aliases: ['dep'],
    cooldown: 0,
    categories: 'economy',
    description: 'This will allow someone to put money in the bank!',
    async execute(message, args, cmd, client, Discord, profileData){
        const amount = args[0];
        const totalAmount = (profileData.eddies + profileData.bank)
        if(amount % 1 !=0 || amount <= 0) return message.channel.send('Deposit amount has to be a whole number!');

        try{
            let depositEmbed = new Discord.MessageEmbed()
            .setTitle('MONEY DEPOSIT')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor("#0040FF")
            .setDescription(`${message.author.username}, you have deposited \`$${amount}\` into you bank account!`)
            .setTimestamp()
            .setFooter(`${message.author.username} Deposit Receipt`);
            if(amount > profileData.eddies) return message.reply(`You do not have enough eddies to put in the bank, you only have \`${profileData.eddies}\` You now have: \`${profileData.bank}\``);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    eddies: - amount,
                    bank: amount
                } 
            }); await message.reply(depositEmbed);

        }catch(err){
            console.log(err)
        }
    },
}