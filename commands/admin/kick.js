module.exports = {
    name: 'kick',
    categories: 'admin',
    description: "This command kicks a member!",
    execute(message, args, cmd, client, Discord){
       
        if(message.member.roles.cache.has('703787206363578448')){

            const target = message.mentions.users.first();

            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            }else{
                message.channel.send(`You coudn't kick that member!`);
            }
            
        }
    }
}