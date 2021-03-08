const ms= require('ms');
module.exports = {
    name: 'mute',
    categories: 'admin',
    description: 'this mutes a member for a set period of time.',
    execute(message, args, cmd, client, Discord){
        
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')

        const target = message.mentions.users.first();
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
        } else {
            message.reply('that username is invalid or does not exist!');
        }
    }
}