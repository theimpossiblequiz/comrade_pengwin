require('dotenv').config();
const Punishments = require('../../models/modSchema');

module.exports = {
    name: 'ban',
    description: "bans players",
    catergory: 'admin',
    async execute(message, args, cmd, client, Discord){
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        
        const reason = args.slice(1).join(" ") || "There was no reason!";

        let banEmbed = new Discord.MessageEmbed()
        .setTitle(`You have been banned from Pengwin Bois`)
        .setAuthor('Commrade Pengwin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
        .setDescription('You have been banned!\n\n'
        + `**Reason:** *${reason}*\n`
        + `If you feel like this is a mistake or wanting to appeal your ban go to this link:`
        + `(https://forms.gle/LajJcnQLSLKwmGg89)`
        )


        await toBan.send(banEmbed)

        let data = await Punishments.findOne({
            guildID: message.guild.id,
            userID: toBan.id,
            
        });

        if(data){
            data.punishments.unshift({
                PunishType: 'Ban',
                Mod: message.author.id,
                Timestamp: new Date().getTime(),
                Reason: reason,
            });
            data.save();

        } else if(!data){
            let newData = new punishments({
                guildID: message.guild.id,
                iserID: toBan.id,
                punishments: [{
                    PunishType: 'Ban',
                    Mod: message.author.id,
                    Timestamp: new Date().getTime(),
                    Reason: reason,
                },],
            });
            newData.save();
        }

        toBan.ban({
            reason: reason
        })

        message.channel.send(`${toBan} was banned from the server!\nReason: ${reason}`).then((msg) => {msg.delete({timeout: 10000})});
    }
}
