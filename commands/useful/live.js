module.exports = {
    name:'live',
    aliases: ['so', 'imlive'],
    cooldown: 5,
    categories: 'useful',
    description: "This allows you to shout out your twitch stream when you go live.",
    async execute(message, args, cmd, client, Discord){
        
        let liveChannel = '679962071865229329'

        client.channels.cache.get(liveChannel).send(
        `@everyone Pengwin8 Just Went Live!\n Go check him out at: https://www.twitch.tv/pengwin8`)

       
    }
}