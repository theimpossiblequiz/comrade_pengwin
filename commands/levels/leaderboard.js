const levels = require('discord-xp');

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    categories: 'levels',
    description: 'This shows the user their current rank',
    async execute(message, args, cmd, client, Discord)
    {
        const rawLeaderboard = await levels.fetchLeaderboard(message.guild.id, 5);
        if(rawLeaderboard.length < 1) return reply("Nobody is on the leaderboard yet");

        const leaderboard = await levels.computeLeaderboard(client, rawLeaderboard); 

        const lb = leaderboard.map(e => `**${e.position}**. ${e.username}#${e.discriminator}\n**Level**: ${e.level}\n**XP**: ${e.xp.toLocaleString()}`);

        const embed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name} Leaderboard!`)
        .setColor("BLUE")
        .setDescription(`${lb.join("\n\n")}`)
        .setTimestamp()
        .setFooter(`This is the current Leader Board for the server: ${message.guild.name}`)

        message.channel.send(embed);
    }
}