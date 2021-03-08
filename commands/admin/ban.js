module.exports = {
    name: 'ban',
    aliases: ['begone'],
    cooldown: 5,
    categories: 'admin',
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord){
       
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')

            const target = message.mentions.users.first();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                return message.reply("User has been banned");
            }else{
                return message.reply('You coudnt ban that member!');
            }
    }
}