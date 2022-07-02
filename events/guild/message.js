const cooldowns = new Map();

const { badwords } = require('../../badwords.json');

require('dotenv').config()

const profileModel = require('../../models/profileSchema');

const Levels = require('discord-xp');

module.exports = async (Discord, client, message) => {
    if(message.author.bot) return;
    const prefix = process.env.PREFIX
    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
        if (!profileData) {
        let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            coins: 1000,
            bank: 0,
        });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }

  //Badword Filter
//   if(!message.member.hasPermission("ADMINISTRATOR")){

//     let confirm = false;

//     var i;
//     for(i = 0;i < badwords.length; i++){
//         if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
//             confirm = true;
//         }
//         if(confirm) {
//             message.delete();
//             message.reply(`Please don't say bad-words in the server!`).then((msg) => {msg.delete({timeout: 10000})});
//         }
//     }
  
 
  
  const randomXP = Math.floor(Math.random() * 9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
      if(hasLeveledUp){
       const user = await Levels.fetch(message.author.id, message.guild.id);
          message.reply(`You leveled up to ${user.level}! Keep it going!`);
      }

  if(!message.content.startsWith(prefix) || message.author.bot) return;

  

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
   

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd)); 

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);


    const admin = message.member.roles.cache.has('812920285698195477');
    const cooldown_amount = (command.cooldown) * 1000;



    if(time_stamps.has(message.author.id)){
        const experation_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < experation_time){
            const time_left = (experation_time - current_time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more secounds before using the command \`${command.name}\``);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
      
    try {
        command.execute(message, args, cmd, client, Discord, profileData);
    } catch(err) {
        message.reply(`There was an error while trying to run \`${command.name}\` command!`);
        console.log(err);
    }
}
