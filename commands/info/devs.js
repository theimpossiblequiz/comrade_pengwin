module.exports = {
    name: 'devs',
    categories: 'info',
    description: "u know what it is about.",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FBC02D')
	    .setTitle('My Devlopers')
	    .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
	    .setDescription('These are the people who coded me!')
	    .setThumbnail('https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
	    .setImage('https://i.imgur.com/iGY5LBj.png')
	    .addFields(
        {name: '\u200B', value: '\u200B' },
        { name: 'Developer 1', value: 'theimpossiblequiz#6969', inline: true },
        { name: 'Developer 2', value: 'LazySensy#1075', inline: true },
	    )
	    .setTimestamp()
	    .setFooter('Made by theimpossiblequiz#6969. & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

        message.channel.send(newEmbed)
    }
}