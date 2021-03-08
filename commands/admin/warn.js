const punishments = require('../../models/modSchema');


module.exports = {
    name: 'warn',
    aliases: [],
    cooldown: 0,
    categories: 'admin',
    description: 'This warns a member',
    async execute(message, args, cmd, client, Discord){
        let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.reply(`You do not have the correct permissions to use this command!`)
        }

        if(message.author.id === toWarn.id) return;

        let reason = args.slice(1).join(" ")

        if(!reason) return message.channel.send('You have to provide a reason!')
        let data = await punishments.findOne({
            guildID: message.guild.id,
            userID: toWarn.id
        });
        
        if(data){
            data.punishments.unshift({
                PunishType: 'Warn',
                Mod: message.author.id,
                Reason: reason,    
            });

            data.save();

            
            let dataEmbed = new Discord.MessageEmbed()
            .setTitle('Moderation Action:')
            .setColor('#8b0000')
            .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
            .setDescription(`New Warning Made: \n\n`
                +`\n`
                + `**Details:**\n`
                + `User Warned: ${toWarn}\n`
                + `Punishment Type: **Warning**\n`
                + `Moderator: **<@${message.author.id}>**\n`
                + `Reason: **${reason}**\n`

            )
            .setThumbnail('https://i.imgur.com/f9E5Dh0.png')
            .setTimestamp()
            .setFooter(`This warning has been published to the Database.`)
//`Warning for: ${toWarn}, has been submitted, with the reason: \`${reason}\`!`

            message.channel.send(dataEmbed);
        } else if (!data){
            let newData = new punishments({
                guildID: message.guild.id,
                userID:toWarn.id,
                punishments: [{
                    PuishType: 'Warn',
                    Mod: message.author.id,
                    Reason: reason,
                }, ],
            });
            newData.save();
            

            let newDataEmbed = new Discord.MessageEmbed()
            .setTitle('Moderation Action:')
            .setColor('#8b0000')
            .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
            .setDescription(`New Warning Made: \n\n`
                +`\n`
                + `**Details:**\n`
                + `User Warned: ${toWarn}\n`
                + `Punishment Type: **Warning**\n`
                + `Moderator: **<@${message.author.id}>**\n`
                + `Reason: **${reason}**\n`

            )
            .setThumbnail('https://i.imgur.com/f9E5Dh0.png')
            .setTimestamp()
            .setFooter(`This warning has been published to the Database.`)
            message.channel.send(newDataEmbed);
        }
    }
}