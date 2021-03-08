const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'ping',
    categories: 'useful',
    description: "this is a ping command!",
    async execute(message, args, cmd, client, Discord){
       const pingEmbed = new Discord.MessageEmbed()
      
        .setColor("BLACK")
        .setAuthor('Comrade Pengwin™', 'https://i.imgur.com/mN1TvFo.png')
        .setTitle('Bot & API Ping!')
         .setDescription(`\n\n`
                + `The bot ping is: <a:source:799748729874808862> **${Date.now() - message.createdTimestamp}ms**\n\n`
                +`API Latency is: <a:discordload:808817665942487061> **${Math.round(client.ws.ping)}ms**`
                + `\n\n`
            )
            .setTimestamp()
            .setFooter('Made By theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png')
        message.channel.send(pingEmbed)
    }
}
