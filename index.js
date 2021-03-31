 const Discord = require('discord.js');

require('dotenv').config();

const { badwords } = require('./data.json')

const newUsers = new Discord.Collection();

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const ytdl = require('ytdl-core');

const Welcome = require('discord-welcome');

const fs = require('fs');

const mongoose = require("mongoose");
//Event Handler's
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const Levels = require('discord-xp');

['command_handler', 'events_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_LOGIN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then( ()=> {
    console.log('Connected to the database!');
}).catch((err) =>{
    console.log(err);
})

Levels.setURL(process.env.MONGODB_LOGIN)
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
    client.user.setPresence({
        status: `online`,
        activity: {
            name: '$help | v.2.1.0 | Badword Filter System',
            type: 'PLAYING'
        }
    });
})
client.once('guildMemberAdd', (member) => {
    const channelID ='703789549679280159';
    if(member.guild.id != '669902459204010004') return;
    const embed = new Discord.MessageEmbed()
    .setTitle(`Member Joined the Pengwin Bois Server!`)
    .setDescription(`\`${member.user.tag}\` has joined the Pengwin Bois server! Please read the <#738589554847645797>. Enjoy your stay here! If you need support please use the command $ticket [reason]!`)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter('Created by Lazysensy#1075 & theimpossiblequiz#6969', 'https://i.imgur.com/iGY5LBj.png');
    client.channels.cache.get(channelID).send(embed);
});
//For badword filter
client.on('message', message =>{
    if(!message.member.hasPermission("ADMINISTRATOR")){

        let confirm = false;

        var i;
        for(i = 0;i < badwords.length; i++){
            if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
                confirm = true;
        }
        if(confirm) {
            message.delete();
            return message.reply('Please do not cuss in the server!')
        }
    }
})


client.login(process.env.DISCORD_TOKEN);
