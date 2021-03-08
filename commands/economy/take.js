const { execute } = require("./balance");
const profileModel = require('../../models/profileSchema');

module.exports = {
    name: 'take',
    categories: 'economy',
    description: 'This will take coins to a member.',
    async execute(message, args, cmd, client, Discord, profileData){
        if(!message.member.roles.cache.has('812920285698195477')) return message.channel.send('You can not use this command! You don\'t have the role: \`staff\`');

        if(!args.length) return message.channel.send('You need to mention a user to give coins to!');

        const amount = args[1];
        const target = message.mentions.members.first();
        if(!target) return message.channel.send('That user does not exist!');

        if(amount % 1 !=0 || amount <= 0) return message.channel.send('Deposit amount has to be a whole number!');

        try{
            const targetData = await profileModel.findOne({
                userID: target.id 
            })
            if(!targetData) return message.channel.send('This user doesn\`t exist in the database!');

            await profileModel.findOneAndUpdate({
                userID: target.id,
            }, {
                $inc: {
                    eddies: - amount,
                }
            })

            return message.reply(`You have taken:\`${amount}\` from: ${target}`);
        }catch(err){
            console.log(err);
        }
    }
}