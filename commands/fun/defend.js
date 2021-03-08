module.exports = {
    name: 'defend',
    categories: 'fun',
    description: "this is a ping command",
    execute(message, args, cmd, client, Discord){
        message.channel.send('WE SHALL DEFEND THE MOTHERLAND!!!');
    }
}