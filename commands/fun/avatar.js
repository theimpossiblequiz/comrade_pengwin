module.exports ={
    name: 'avatar',
    categories: 'fun',
    aliases: ['pfp', 'profilepic', 'mypic'],
    description: 'name here',
    execute(message, args, cmd, client, Discord){
        message.channel.send(message.author.displayAvatarURL());
    }
}