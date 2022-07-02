const recon = require('reconlx')


module.exports = {
    name: 'help',
    aliases: ['helpme', 'mainmenu'],
    cooldown: 15,
    categories: 'useful',
    description: 'this is to help members use the bot',
    async execute(message, args, cmd, client, Discord) {
        const { MessageEmbed } = require('discord.js')
        const ReactionPages = recon.ReactionPages
        const textPageChange = true;
        const time = 100000000;
        const mainEmbed = new Discord.MessageEmbed()
            .setTitle('Help Menu')
            .setColor("red")
            .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
            .setDescription(`This is where you can see all of the commands with the bot **Comrade Pengwin**.\n\n`
                + `\n\n`
                + `**Table of Contents:**\n\n`
                + `Page 1: Main Menu\n\n`
                + `Page 2: Fun commands help\n\n`
                + `Page 3: Server administrator commands help\n\n`
                + `Page 4: Music commands help\n\n`
                + `Page 5: Support ticket command help\n\n`
                + `Page 6: Poll System How to\n\n`
                + `\n\n`
                +`**Navigation Options:**\n\n`
                + `Press ⏪ to go back a page\n\n`
                + `Press ⏩ to go to the next page\n\n`
                +`You can also just send the page number you want to go to.\n\n`
                +`\n\n`
                +`**Other Information:**\n\n`
                +`The prefix for the bot is **$ (money sign)**\n\n`
                +`**YOU HAVE 10 MINUTES TO INTERACT WITH THIS MENU**`
            )
            .setThumbnail('https://i.imgur.com/x666emk.png')
            .setTimestamp()
            .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org')
        const funEmbed = new Discord.MessageEmbed()
            .setColor('#95ff00')
	        .setTitle('FUN COMMANDS (Page 2)')
	        .setDescription('These are all of my fun commands!')
	        .addFields(
            {name: '\u200B', value: '\u200B' },
            {name: '$aris', value: 'This is a very important person on the server.'},
            {name: '$defend', value: 'This is just a fun little command you can joke around with.'},
            {name: '$hello', value: 'Say hello to everyone.'},
            {name: '$motherland', value: 'This command tells you the motherland location'},
            {name: '$noah', value: 'This is the owner of the server.'},
            {name: '$pizza',  value: 'This is a pizza command' },
            {name: '$pog',  value: 'Poggers' },
            {name: '$work',  value: 'Just a fun command saying you are leaving for work.' },
	        )
            .setTimestamp()
	        .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075','https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');
            
        const usefulEmbed = new Discord.MessageEmbed()
                .setColor("#00ffdb")
                .setTitle('Useful Commands (Page 3)')
                .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
                .setDescription('These are the useful/info commands of the server!')
                .addFields(
                    {name: `\u200B`, value: `\u200B`},
                    {name: '$devs', value: 'This will the devlopers of Comrade Pengwin.'},
                    {name: '$ping', value: 'This will tell you the bot ping and the Discord API ping.'},
                    {name: '$poll', value: 'This will do a public poll. The use fo the command is ```$poll [the question you want to be asked]```. This command can only be used by staff members!'},
                    {name: '$so', value: 'This command will allow you to shoutout your stream! The use of this command is: ```$so [Discord Username] [Twitch Username]```!'},
                    {name: '$twitch', value: 'This command will give you the link to aPengwin8\'s twitch channel.'},
                    {name: '$yt', value: 'This will bring you to Pengwin8\'s YouTube channel.'}
                )
                .setTimestamp()
                .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');
        
        const musicEmbed = new Discord.MessageEmbed()
            .setColor("#E91E63")
	        .setTitle('MUSIC COMMANDS (Page 6)')
	        .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
	        .setDescription('These are all of my music commands!')
	        .addFields(
            {name: '\u200B', value: '\u200B' },
            {name: '$play', value: 'Do $play [YouTube URL, Spotify URL, or Song name and Artist]. You also do $play to add songs to the queue.'},
            {name: '$skip', value: 'This will skip the songs in the queue.'},
            {name: '$stop', value: 'Do this command to have the bot leave the voice channel and stop the music.'},
            {name: '**IMORTANT, PLEASE READ:**', value: 'If you **stop** the music while there **still is songs in the queue** it will break the bot. We are trying to find a fix to this, just in the mean time be careful!'}
	        )
	        .setTimestamp()
            .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');
            
        const supportEmbed = new Discord.MessageEmbed()
                .setColor("#FBC02D")
                .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
                .setTitle("SUPPORT SYSTEM HOW TO: (Page 4)")
                .setDescription('With Commrade Pengwin™️ you can submit a support ticket. To do so, do the command **$ticket** `[reason]` and one of the server staff members will be with you!')
                .addFields(
                    {name:'Example:', value: 'You should have a message sent from Comrade Pengwin that looks like this when you run the command:'}
                )
                .setImage('https://i.imgur.com/WVawq7O.png', 'https://discord.js.orh')
                .setTimestamp()
                .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

        const economyEmbed = new Discord.MessageEmbed()
                .setColor("#006400")
                .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
                .setTitle("ECONOMY SYSTEM: (Page 5)")
                .setDescription('With Commrade Pengwin™️ there is a economy system, you can put money in the bank, deposit money, withdraw money, and beg for money.')
                .addFields(
                    {name:'Commands:', value: '\u200B'},
                    {name: '$bal', value: 'This will give you your balance of your wallet and bank account.'},
                    {name: '$beg', value: 'This command will give you a random amount of money.'},
                    {name: '$give', value: 'This command can only be used by staff members. This command will allow you to give any ammount of money to a user.\n Usage: \`$give [user you are giving the money to] [amount of money]\`'},
                    {name: '$take', value: 'This command can only be used by staff members. This command will allow you to take any amount of money from a user. \n Usage: \`$take [user you are taking money from] [amount of money]\`'},
                    {name: '$deposit', value: 'This will allow you to put money in the bank.\n Usage: \`$deposit [amount you want to put in the bank]\`'},
                    {name: '$wd', value: 'This command will allow you to take money from the bank and put it in your wallet.\n Usage: \`$wd [amount you want to take out]\`'}
                )
                .setTimestamp()
                .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');

        
        const pages = [
            mainEmbed,
            funEmbed,
            usefulEmbed,
            supportEmbed,
            economyEmbed,
            musicEmbed,
        ]

        const emojis = [
            "⏪",
            "⏩"
        ]
        
        ReactionPages(message, pages, textPageChange, emojis, time); 
    }
}
