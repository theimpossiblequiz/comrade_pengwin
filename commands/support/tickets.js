require('dotenv').config();
const  Ticketlist = require('../../models/ticketSchema');
const ticket = require('./ticket');

module.exports = {
    name: 'tickets',
    aliases: [],
    description: 'Lists tickets of a user has',
    catergory: 'admin',
    async execute (message, args, cmd, client, Discord) {
        const target = message.mentions.users.first()
        if(!target) return message.reply('Please mention a user to view their tickets!');

        try{
            const results = await Ticketlist.findOne({
                userID: target.id,
                guildID: message.guild.id
            });

            if (!results) return message.channel.send(`${target.username} does not have any history of tickets!`)

            let reply = ``

            for(const ticket of results.ticket){
                const { Ticket, userID, Server, Timestamp, Reason } = ticket
                reply += `**Ticket:** ${Ticket}\n **User:** <@${userID}> \n **Server:** ${Server}\n **Reason**: ${Reason}\n**Date**: ${new Date(Timestamp).toLocaleDateString()}\n\n-----------------------------------------------\n\n`;
            }
            const embed = new Discord.MessageEmbed()
            .setDescription(`${reply}` )
            .setAuthor(`${target.tag}'s Tickets`, target.displayAvatarURL())
            .setTimestamp()
            message.reply(embed);

        } catch(err){
            message.channel.send("An error has occured please DM a mod")
            throw err;
        }
        
    }
}