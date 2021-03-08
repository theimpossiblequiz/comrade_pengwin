module.exports = {
    name: 'hello',
    categories: 'fun',
    description: "Allows you to say hello to the server",
    execute(message, args, cmd, client, Discord){
        message.channel.send('Hello fellow Weponized Assualt Penguins! DEFEND THE MOTHERLAND!!');
    }
}