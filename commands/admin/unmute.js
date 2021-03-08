module.exports = {
    name: 'unmute',
    categories: 'admin',
    description: 'this unmutes a member.',
    execute(message, args, cmd, client, Discord){
        
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.get('670194030998716447');
            let muteRole = message.guild.roles.cache.get('783030597500534805');

            let memberTarget = message.guild.members.cache.get(target.id)

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.reply(`<@${memberTarget.user.id}> has been unmuted!`);
        }else{
            message.reply('that username is invalid or does not exist!');
        }
    }

}