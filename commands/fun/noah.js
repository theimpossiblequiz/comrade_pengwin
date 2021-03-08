module.exports = {
    name: 'noah',
    categories: 'fun',
    description: "this is a ping command!",
    execute(message, args, cmd, client, Discord){
        message.channel.send('He is the leader of the Pengwin8 army!');
    }
}