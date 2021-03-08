const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: ['money', 'need'],
  cooldown: 60,
  permissions: [],
  categories: 'economy',
  description: "beg for coins",
    async execute(message, args, cmd, client, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          eddies: randomNumber,
        },
      }
    );
    let begEmbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
    .setColor("#00FF00")
    .setTitle(`You beged for eddies and recieved, \`${randomNumber}\``)
    .setDescription(`Now your balance is: \`${profileData.eddies}\``)
    .setFooter(`Everyone can beg for money, just depends on how much you get.`)
    .setTimestamp()

    message.channel.send(begEmbed);
  },
};
