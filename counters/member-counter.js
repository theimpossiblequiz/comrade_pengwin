module.exports = async (client) =>{
    const guild = client.guilds.cache.get('669902459204010004');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('787183644090433586');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 300000);
}