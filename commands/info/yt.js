module.exports = {
    name: 'yt',
    Aliases: ['youtube', 'Pengin8yt'],
    categories: 'info',
    cooldown: 0,
    description: "this will bring you to Pengwin8's youtube channel",
    execute(message, args, cmd, client, Discord){
        message.channel.send('You can find Penqwin8 youtube channel at  https://www.youtube.com/channel/UCZBJJtKHSfXCFAXN54Iu_cw');
    }
}

