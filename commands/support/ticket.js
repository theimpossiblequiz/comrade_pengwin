const Ticketlist = require('../../models/ticketSchema');
const ticket = require('../../models/ticketSchema');

module.exports = {
    name: "ticket",
    aliases: [],
    categories: 'support',
    description: "open a ticket!",
    async execute(message, args, cmd, client, Discord) {
      const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);

      const reason = message.content.split(" ").slice(1).join(" ");

      if(!reason) return message.reply('You have to  provide a reason!');
      
      channel.setParent("773725874414420009");
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });

      let GreetEmbed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag} Support Ticket`)
      .setAuthor('Pengwin Bois Support Team')
      .setColor("#00FFFF")
      .setDescription(`<@${message.author.id}> Thank you for submiting a support ticket! \n Are support team will be right with you!\n\n **Reason:** ${reason}`);
  
      const reactionMessage = await channel.send(GreetEmbed);
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Error sending emojis!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("Deleting this channel in 5 seconds!");
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });

      let ticketLog = '784629794276900865'

      let logEmbed = new Discord.MessageEmbed()
      .setTitle('New Ticket Made')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
      .setDescription(`There was a ticket made.\n\n ***Ticket info:***\n User that opened ticket: **${message.author.username}**\n -----------------------\n Reason: **${reason}**`)
      .setAuthor(`${message.author.username}`,  message.author.displayAvatarURL())
      client.channels.cache.get(ticketLog).send(logEmbed);


      let data = await Ticketlist.findOne({
        guildID: message.guild.id,
        userID: message.author.id,
      });

      if(data){
        data.ticket.unshift({
          Ticket: 'New Ticket',
          guildID: message.guild.id,
          userID: message.author.id,
          Server: message.guild.name,
          Timestamp: new Date().getTime(),
          Reason: reason,
        });
        data.save();
      }else if(!data){
        let newData = new ticket({
         guildID: message.guild.id,
         userID: message.author.id,
         ticket: [{
          Ticket: 'New Ticket',
          guildID: message.guild.id,
          userID: message.author.id,
          Server: message.guild.name,
          Timestamp: new Date().getTime(),
          Reason: reason,
         },],
        })
        newData.save();
      }
  
      message.channel
        .send(`We will be right with you! ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };