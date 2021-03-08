module.exports = {
    name: 'activity',
    aliases: ['sa', 'ac'],
    cooldown: 10,
    categories: 'admin',
    async execute(message, args, cmd, client, Discord){
       
        if(!message.member.roles.cache.has('703787206363578448')) return message.reply('You do not have the permissions to run this command.')


            if (args[0] === "listening"){
                types = 2
            } else if (args[0] === "playing"){
                types = 1
            } else if (args[0] === "watching"){
                types = 3
            } else {
            return message.channel.send("Invalid option")
    }
            //here you tell the bot what the activity is
            args.shift()
            content = args.join(' ')
            client.user.setPresence({
            activity: {
                name: content,
                type: types
            }
            })
            message.channel.send(`**${message.author.username}** DONE :D`)
    }
}