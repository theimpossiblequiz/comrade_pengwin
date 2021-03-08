module.exports = {
    name: 'reactionrole',
    aliases: ['rs', 'newrs', 'reactions'],
    cooldown: 10,
    categories: 'admin',
    description: "Sets up a reaction role message!",
    async execute(message, args, cmd, client, Discord) {
        const channel = '793952699615150120';
        const verifiedRole = message.guild.roles.cache.find(role => role.name === "squad bois");
        const dmopenRole = message.guild.roles.cache.find(role => role.name === "DM's Open");
        const dmclosedRole = message.guild.roles.cache.find(role => role.name === "DM's Closed");
        const beatsaberplayerRole = message.guild.roles.cache.find(role => role.name === "Beat Saber Player");
        const gamerRole = message.guild.roles.cache.find(role => role.name === "Gamer");
        const naRole = message.guild.roles.cache.find(role => role.name === "North America");
        const eaRole = message.guild.roles.cache.find(role => role.name === "Europe");
        const ausRole = message.guild.roles.cache.find(role => role.name === "Australia");
        const spotifyRole = message.guild.roles.cache.find(role => role.name === "Spotify Listener");
        //reaction role emoji const
        const verifiedRoleEmoji = '✅';
        const dmopenRoleEmoji = '🔔';
        const dmclosedRoleEmoji = '🔕';
        const gamerRoleEmoji = '🎮';


        let embed1 = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Identifier Roles')
            .setAuthor('Commrade Pengin™️', 'https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
            .setThumbnail('https://i.imgur.com/mN1TvFo.png', 'https://discord.js.org')
            .setDescription('These are identifier roles, they tell other user what you want/like!\n\n'
                + `${verifiedRoleEmoji} for the verified role,\n\n`
                + `${dmopenRoleEmoji} for the DM's open role,\n\n`
                + `${dmclosedRoleEmoji} for the DM's closed role,\n\n`
                + `<:beatsaber:731797140573126686> for the Beat Saber Player role,\n\n`
                + `${gamerRoleEmoji} for the Gamer role,\n\n`
            )
            .setThumbnail('https://i.imgur.com/lyruSKP.jpeg', 'https://discord.js.org')


        let messageEmbed1 = await message.channel.send(embed1);
        messageEmbed1.react(verifiedRoleEmoji);
        messageEmbed1.react(dmopenRoleEmoji);
        messageEmbed1.react(dmclosedRoleEmoji);
        messageEmbed1.react('731797140573126686');
        messageEmbed1.react(gamerRoleEmoji);

        let embed2 = new Discord.MessageEmbed()
            .setColor('#00FFF4')
            .setTitle('Region Roles')
            .setDescription('This tells other user of the server what Region you are in!\n\n'
                + `<:americanflagemojibygoogle:786015637289828362> for the North America role,\n\n`
                + `<:download:786015653152161852> for the Europe role,\n\n`
                + `<:1f1e61f1fa:786015667656589353> for the Australia role,\n\n`

            )
            


        let messageEmbed2 = await message.channel.send(embed2);
        messageEmbed2.react('786015637289828362');
        messageEmbed2.react('786015653152161852');
        messageEmbed2.react('786015667656589353');

        let embed3 = new Discord.MessageEmbed()
            .setColor('#1EFF00')
            .setTitle('Music Roles')
            .setDescription('This tells other user what you use to listen to music!\n\n'
                + `<:Spotify:776618058915512330> for the Spotify role,\n\n`
            )
            .setFooter('Made by theimpossiblequiz#6969 & LazySensy#1075', 'https://i.imgur.com/iGY5LBj.png', 'https://discord.js.org');


        let messageEmbed3 = await message.channel.send(embed3);
        
        messageEmbed3.react('776618058915512330');

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === verifiedRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(verifiedRole);
                }
                if (reaction.emoji.name === dmopenRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dmopenRole);
                }
                if (reaction.emoji.name === dmclosedRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dmclosedRole);
                }
                if (reaction.emoji.id === '731797140573126686') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(beatsaberplayerRole);
                }
                if (reaction.emoji.name === gamerRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gamerRole);
                }
                if (reaction.emoji.id === '786015637289828362') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(naRole);
                }
                if (reaction.emoji.id === '786015653152161852') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(eaRole);
                }
                if (reaction.emoji.id === '786015667656589353') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ausRole);
                }
                if (reaction.emoji.id === '776618058915512330') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(spotifyRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === verifiedRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(verifiedRole);
                }
                if (reaction.emoji.name === dmopenRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dmopenRole);
                }
                if (reaction.emoji.name === dmclosedRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dmclosedRole);
                }
                if (reaction.emoji.id === '731797140573126686') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(beatsaberplayerRole);
                }
                if (reaction.emoji.name === gamerRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gamerRole);
                }
                if (reaction.emoji.id === '786015637289828362') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(naRole);
                }
                if (reaction.emoji.id === '786015653152161852') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(eaRole);
                }
                if (reaction.emoji.id === '786015667656589353') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ausRole);
                }
                if (reaction.emoji.id === '776618058915512330') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(spotifyRole);
                }
            } else {
                return;
            }
        });
    }

}