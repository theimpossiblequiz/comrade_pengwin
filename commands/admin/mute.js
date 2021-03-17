const ms= require('ms');
const Punishments = require('../../models/modSchema');
module.exports = {
    name: 'mute',
    categories: 'admin',
    description: 'this mutes a member for a set period of time.',
    async execute(message, args, cmd, client, Discord){
        
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')

        const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (target) {

            let mainRole = message.guild.roles.cache.get('670194030998716447');
            let muteRole = message.guild.roles.cache.get('783030597500534805');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.reply(`<@${memberTarget.user.id}> has been muted!`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.reply(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));

            const timeout = args[1] || "365days"

            let data = await Punishments.findOne({
                guildID: message.guild.id,
                userID: target.id
            });
    
            if(data){
                data.punishments.unshift({
                    PunishType: 'Mute',
                    Mod: message.author.id,
                    Timestamp: new Date().getTime(),
                    Reason: "They where given a timout for breaking rules.",
                });
                data.save();
    
            } else if(!data){
                let newData = new punishments({
                    guildID: message.guild.id,
                    userID: target.id,
                    punishments: [{
                        PunishType: 'Mute',
                        Mod: message.author.id,
                        Timestamp: new Date().getTime(),
                        Reason: "They where given a timout for breaking rules.",
                    },],
                });
                newData.save();
                console.log(data);
            }
        } else {
            message.reply('that username is invalid or does not exist!');

             
        }
        let muteEmbed = new Discord.MessageEmbed()
            .setTitle(`Muted in ${message.guild.name}`)
            .setAuthor(`${target}`, target.displayAvatarURL())
            .setDescription(`This is a message to tell you that you have been muted. Your mute is either till the time runs out or after a mod unmutes you.`)
            .setFooter('This mute has been saved to you record.')

        target.send(muteEmbed);
    }
}