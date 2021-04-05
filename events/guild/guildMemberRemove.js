const { MessageEmbed } = require('discord.js');
const profileModel = require('../../models/profileSchema');

module.exports = async(client, Discord, member) => {
    await profileModel.findOneAndDelete(
        {
            userID: member.id,
            serverID: member.guild.id,
        },
    )
}