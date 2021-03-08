module.exports = {
    name: 'adminmenu',
    aliases: ['amenu', 'ahelp'],
    cooldown: 0,
    category: 'admin',
    description: 'This is the admin help menu!',
    async execute(message, args, cmd, client, Discord){
        if(!message.member.roles.cache.has('812920285698195477')) return message.reply('You do not have the permissions to run this command.')
            const adminEmbed = new Discord.MessageEmbed()
                .setColor('#FF33CC')
	            .setTitle('SERVER ADMINISTRATOR COMMANDS (Page 7)')
	            .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
	            .setDescription('These commands are for the admin of the server, you may not be able to run these commands.')
	            .addFields(
                    {name: '\u200B', value: '\u200B' },
                    {name: '$clear', value: 'This clears messages in the channel you run the command. You can clear up to 100 messages 14 days old, and a minimum of 2 messages.'},
                    {name: '$kick', value: 'This will kick a member out of the server.'},
                    {name: '$ban', value: 'This will ban a meber from the server.'},
                    {name: '$mute [username] [time]', value: 'This will mute a member until unmuted or until the set times id over.'},
                    {name:'$unmute', value: 'This will unmute a member.'},
                    {name: '$warn', value: 'This allows you to warn a member if they do not follow any of the server rules and so on.'}
	            )
	            .setTimestamp()
	            .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

            message.channel.send(adminEmbed);
    }
}