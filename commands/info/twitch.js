module.exports = {
    name: 'twitch',
    categories: 'info',
    description: "this will bring you to Pengwin8's twitch channel",
    execute(message, args, cmd, client, Discord){
        message.channel.send('You can find Penqwin8 twitch channel at  https://www.twitch.tv/pengwin8');
    }
}