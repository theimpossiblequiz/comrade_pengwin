module.exports = {
    name: 'stats',
    categories: 'info',
    description: "u know what it is about.",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('GOLD')
	    .setTitle('Bot Status!')
	    .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/lyruSKP.jpeg', 'https://discord.js.org')
	    .setDescription('This is the staus of the bot at the current moment')
	    .setThumbnail('https://i.imgur.com/lyruSKP.jpeg', 'https://discord.js.org')
	    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Version:', value: '2.1.1'},
        { name: 'Last Update:', value: '2/07/2022', inline: true },
        { name: 'New Features:', value: 'The bot now runs commands a bit different, there is now a more advanced music system(BETA), the ping command now also gives you the API ping, and lastly the bot now has cooldowns for some commands! '}
	    )
	    .setTimestamp()
	    .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

        message.channel.send(newEmbed)
    }
}