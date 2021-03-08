module.exports = {
    name: 'supportex',
    categories: 'support',
    description: "u know what it is about.",
    execute(message, args, cmd, client, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
        .setTitle("SUPPORT SYSTEM HOW TO:")
        .setDescription('With Commrade Pengwin™️ you can submit a support ticket. To do so, do the command **$ticket** `[reason]` and one of the server staff members will be with you!')
        .addFields(
            {name:'Example:', value: 'You should have a message sent from Comrade Pengwin that looks like this when you run the command:'}
        )
        .setImage('https://i.imgur.com/WVawq7O.png', 'https://discord.js.orh')
        .setTimestamp()
        .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

        message.channel.send(newEmbed)
    }
}