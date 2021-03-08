module.exports = 
{
    name: 'ticket',
    description: 'Support Ticket',
    categories: 'support',
    async execute(message, args, cmd, client, Discord)
    {
        const reason = message.content.split(" ").slice(1).join(" ");

        let SupportCategory = message.guild.channels.cache.find(category => category.name === "Staff Contact 📬")

        if(message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory){
            SupportCategory = await message.guild.channels.create('Tickets', {
                type: "category",
            });
        };

        if(!message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory){
            message.channel.send("Sorry But I Do Not Have Permissions To Create The Category Needed For Tickets!")
        }

        if (!message.guild.roles.cache.find(role => role.name === "Support Team")) {
            await (message.guild.roles.create({
                name: 'Support Team',
                color: 'BLUE',
            }));
        };

        let supportrole = message.guild.roles.cache.find(role => role.name === "Support Team")

        if (!supportrole) {
            return message.repy("Sorry, but there is no support team role in this server. Either create or give permission to.")
        }

        if (!reason){
            return message.reply("Please specify a ticket subject \n \`$ticket [subject]\`")
        }

        const channelName = `ticket-${message.author.username}-${message.author.discriminator}`
        if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username.toLowerCase()}-${message.author.discriminator}`)) {
            return message.channel.send("Sorry, But you already have a ticket open!")
        }

        message.guild.channels.create(channelName, { parent: SupportCategory.id, topic: `Ticket Owner: ${message.author.id}`}).then(c => {
            const everyone = message.guild.roles.cache.find(role => role.name === "@everyone")
            c.updateOverwrite(supportrole, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: true,
            });
            c.updateOverwrite(everyone, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: false,
            });
            c.updateOverwrite(message.author, {
                SEND_MESSAGE: true,
                VIEW_CHANNEL: true,
            });
            let CreateTicketEmbed = new Discord.MessageEmbed()
                .setColor("#00cccc")
                .setTitle("New Support Ticket")
                .setDescription(`<@${message.author.id}> Your support ticket channel is <#${c.id}>`)
                .setTimestamp()
                .setFooter('Made By LazySensy#1075 & theimpossiblequiz#6969', 'https://i.imgur.com/iGY5LBj.png')
            message.channel.send(CreateTicketEmbed)
            let GreetEmbed = new Discord.MessageEmbed()
                .setColor("#00cccc")
                .addField("New Support Ticket", `<@${message.author.id}> Thanks for submitting a support ticket. Our support staff will get back to you shortly!`)
                .addField(`Issue:`, reason)
                .addField("Close this ticket", 'Do this by doing the command $close')
                .setTimestamp()
                .setFooter('Made By LazySensy#1075 & theimpossiblequiz#6969', 'https://i.imgur.com/iGY5LBj.png')
            c.send(GreetEmbed)
        }).catch(console.error);
    }
}