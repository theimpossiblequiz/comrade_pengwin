var Scraper = require('images-scraper')

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name:'image',
    categories: 'useful',
    aliases: ['google', 'imagelook'],
    cooldown: 10,
    description: 'Searchs google for images',
    async execute(message, args, cmd, client, Discord){
        const image_query = args.join(' ');
        if(!image_query) return message.reply('Please enter a image name!');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}