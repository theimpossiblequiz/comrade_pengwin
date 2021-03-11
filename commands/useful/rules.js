module.exports ={
    name: 'rules',
    categories: 'useful',
    description: 'this is to help members use the bot',
    async execute(message, args, cmd, client, Discord) {
        if(!message.member.roles.cache.has('812920285698195477')) return message.channel.send('You can not use this command! You don\'t have the role: \`staff\`');

        const embed = new Discord.MessageEmbed()
        .setTitle(`**Welcome to the Pengwin Bois!**`)
        .setAuthor('Pengwin bois Staff', 'https://i.imgur.com/mN1TvFo.png')
        .setThumbnail('https://www.westchestercomdiv.com/wp-content/uploads/sites/638/2019/06/images.png')
        .setDescription(`**RULES:**\n`
        + `Please read all of the rules before you continue to the <#793952699615150120>! Thank you!`
        + `\n`
        + `1. Be Nice!\n\n`
        + `2. Please respect the topics for each channel.\n\n`
        + `3. **No NSFW** / sexually explicit content or language :child:, a warning maybe posted to your account. This depends on the severity of the message/image \n\n`
        + `4. **Don't** spam several channels with the same post. For example, if you a promoting an event, post it in one relevant channel. This will have you get a warning from one of the staff members or owner. \n\n`
        + `5. **Don’t** spam. This goes for **all** of the discord channels and Twitch chat. \n\n`
        + `6. Be respectful to everyone!!!!! \n\n`
        + `7. No self promotions in the server, **the only exception** is in the <#793991572672217089> channel. This rule also applies for the Twitch chat. \n\n`
        + `8. Follow the Discord and Twitch official rules! The T.O.S of both services can be found here: \n\n`
        + `**Discord T.O.S:** (https://discord.com/terms) \n`
        + `**Twitch T.O.S:** (https://www.twitch.tv/p/legal/terms-of-service/)  \n\n`
        + `9. Keep **all bot related message's** within the <#746584654496399402>. \n\n`
        + `10. **Don't** ask the staff or owner to change your role. If the staff or the owner feels the need to do so, they will. Spamming a staff member **(through DM's or server chat's )** for a role will get you a warning. \n\n`
        + `11. **Don't** ask for the moderator roll! This also applies in twitch chat also. \n\n`
        + `-------------------------------- \n\n`
        + `**Punishments:** \n`
        + `The punishment will depend on the severity of the action or the repetition of the action. First offence will be a verbal warning. Other punishments can be a ban/timeout.\n\n`
        + `**Mods have the right to warn, kick, or ban with reasonable cause.**\n\n`
        + `--------------------------------\n\n`
        + `**Verified role:** Even though you have joined, **you will need the squad bois role** to connect to voice chats and chat in other channels. Please go to the <#793952699615150120> to get the verified role. If there is an issue please go to the <#773726126907326484> and follow the instructions.\n\n`
        + ` \n\n`
        + ` Sincerely, Pengwin Bois Staff.`
    )
    .setFooter('These rules must followed at all times! Thanks for being here -Pengwin Bois Staff')

    message.channel.send(embed)
}
}
