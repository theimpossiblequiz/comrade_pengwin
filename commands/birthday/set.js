const { Schema } = require('mongoose');
const birthdaySchema = require('../../models/birthdaySchema');
const { execute } = require('../support/ticket');

module.exports = {
    name: 'setbirthday',
    aliases: ['sb'],
    categories: 'birthday',
    description: 'This will allow a user to set thier birthday!',
    async execute(message, args, cmd, client, Discord){

        const months = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December"
        }

        const joined = args.join(" ");
        const split = joined.trim().split("/");

        let [month, day] = split

        if(!day) return message.reply('Please provide a valid day!');
        if(!month) return message.reply('Please provide a valid month!');

        if(isNaN(day) || isNaN(month)) return message.reply('The date that you gave is not real or invaild!');

        day = parseInt(day);
        month = parseInt(month);

        if(!day || day > 31) return message.reply('You need to provide a day between the numbers `1-31`');
        if(!month || month > 12) return message.reply('You need to proved a month between the numbers `1-12`');

        const convertedDay = suffixes(day);
        const convertedMonth = months[month];
        const birthdayString = `${convertedDay} of ${convertedMonth}`;

        birthdaySchema.findOne({ userID: message.author.id }, async(err, data) => {
            if(data) {
                data.birthday = 
                data.save();
            } else {
                new birthdaySchema({
                    userID: message.author.id,
                    birthday: birthdayString,
                }).save();
            }
        })

        const birthdayEmbed = new Discord.MessageEmbed()
        .setTitle('Birthday Saved!')
        .setColor("RANDOM")
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription( `The birthday for:\n\n` 

        + `**User:** <@${message.author.id}>\n`
        + `**Birthday:** ${convertedMonth} - ${convertedDay}`
        )
        .setFooter(`If you have entered the wrong date please DM a server admin!`)
        .setTimestamp()

        message.channel.send(birthdayEmbed).then((msg) => {msg.delete({timeout: 20000})});
    }
}
/**
 * @param {Number} number
 */

function suffixes(number) {
    const converted = number.toString();

    const lastChar = converted.charAt(converted.length - 1);

    return lastChar == "1" 
    ? `${converted}st` :
    lastChar == "2" 
    ? `${converted}nd` :
    lastChar == "3" 
    ? `${converted}rd` :
    `${converted}th`

}