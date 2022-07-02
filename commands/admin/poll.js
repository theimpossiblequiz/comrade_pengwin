module.exports = {
    name: 'poll',
    categories: 'admin',
    description: 'This will start a poll.',
    async execute(message, args, cmd, client, Discord){

        if(!message.member.roles.cache.has('782997114627162112')) return message.reply('You do not have the permissions to run this command.')

        let pollChannel = '792218174740234280'
        let pollDescription = args.slice(0).join('  ');


        client.channels.cache.get(pollChannel).send('@everyone, There is a new poll:')

        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`💥NEW PUBLIC POLL! By: ${message.author.username}💥`)
        .setColor("RANDOM")
        .setAuthor('Commrade Pengwin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
        .setDescription(pollDescription)
        .addFields(
            {name: `\u200B`, value: `\u200b`},
            {name: '👍 for **YES**', value:`\u200B`},
            {name: '👎 for **NO**', value: `\u200B`},
            {name: '⛔ for ** I don\'t have an opinion**', value: `\u200B`}
        )
        .setThumbnail('https://i.imgur.com/N35bpj4.jpg', 'https://discord.js.org')
        .setTimestamp()
        .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org')

       let msgEmbed = await client.channels.cache.get(pollChannel).send(embedPoll);
       await msgEmbed.react('👍')
       await msgEmbed.react('👎')
       await msgEmbed.react('⛔')
    }
}