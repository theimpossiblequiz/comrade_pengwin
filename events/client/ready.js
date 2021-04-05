

module.exports = (Discord, client) => {
    console.log(`Handlers Loaded!`);

    console.log(`logged in as ${client.user.tag}`);
    client.user.setPresence({
        status: `online`,
        activity: {
            name: '$help | v.2.1.0 | Badword Filter System',
            type: 'PLAYING'
        }
    });
}
