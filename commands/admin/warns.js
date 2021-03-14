require('dotenv').config();
const Punishments = require('../../models/modSchema');

module.exports = {
    name: 'warns',
    aliases: [],
    description: 'Lists warns a user has',
    catergory: 'admin',
    async execute (message, args, cmd, client, Discord) {
        const target = message.mentions.users.first()
        if(!target) return message.reply('Please mention a user to view their warns');

        try{
            const results = await Punishments.findOne({
                userID: target.id,
                guildID: message.guild.id
            });

            if (!results) return message.channel.send(`${target.username} does not have any warns at this current time`)

            let reply = ``

            for(const warning of results.punishments){
                const { PunishType, Mod, Reason, Timestamp } = warning
                console.log(warning)
                reply += `**Punish Type**: ${PunishType}\n**Moderator**: <@${Mod}>\n**Reason**: ${Reason}\n**Date**: ${new Date(Timestamp).toLocaleDateString()}\n\n-----------------------------------------------\n\n`;
            }
            const embed = new Discord.MessageEmbed()
            .setDescription(`${reply}` )
            .setAuthor(`${target.tag}'s Punishments`, target.displayAvatarURL())
            .setTimestamp()
            message.reply(embed);

        } catch(err){
            message.channel.send("An error has occured please DM a mod")
            throw err;
        }
        
    }
}