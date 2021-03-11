module.exports = {
    name:'so',
    aliases: ['so', 'imlive'],
    cooldown: 5,
    categories: 'useful',
    description: "This allows you to shout out your twitch stream when you go live.",
    async execute(message, args, cmd, client, Discord){
        let user_live = message.mentions.members.first() || args[0]
        let twitch_username = user_live || args[1]

        if(!user_live) return message.channel.send('You need to say the user that is live!')
        message.channel.send(
            `Hey peeps, @${user_live} just went live 😮! \nGo check them out at: https://twitch.tv/${twitch_username}`
        );

       
    }
}
