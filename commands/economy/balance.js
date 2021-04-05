const profileModel = require("../../models/profileSchema");

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    categories: 'economy',
    description: "Check the user balance",
    async execute(message, args, cmd, client, Discord, profileData) {
      const target = message.mentions.users.first()
      if(target) {
          const targetData = await profileModel.findOne({ userID: target.id, serverID: message.guild.id })
          if(!targetData) return message.channel.send("This user does not exist on this database")
          const totalAmount = targetData.eddies + targetData.bank
          let MoneyEmbed = new Discord.MessageEmbed()
          .setColor("#006400")
          .setTitle('User Economy Information:')
          .setAuthor(`${message.author.username} Bank Account`, message.author.displayAvatarURL())
          .setDescription(
             `\n**Available Wallet:** \`$${profileData.eddies}\`\n **Available Bank Balance:** \`$${profileData.bank}\`\n **Total Amount**: \`$${totalAmount}\``
          )
          .setTimestamp()
          .setFooter(`You, ${message.author.username} have, ${totalAmount} total eddies!`)

          message.channel.send(MoneyEmbed);
      } else if(!target){
         const totalAmount = profileData.eddies + profileData.bank 
         let moneyEmbed = new Discord.MessageEmbed()
          .setColor("#006400")
          .setTitle('User Economy Information:')
          .setAuthor(`${message.author.username} Bank Account`, message.author.displayAvatarURL())
          .setDescription(
             `\n**Available Wallet:** \`$${profileData.eddies}\`\n **Available Bank Balance:** \`$${profileData.bank}\`\n **Total Amount**: \`$${totalAmount}\``
          )
          .setTimestamp()
          .setFooter(`You, ${message.author.username} have, ${totalAmount} total eddies!`)

          message.channel.send(moneyEmbed);
      }
  }
}
