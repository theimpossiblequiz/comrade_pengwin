const mongoose = require('mongoose');

let modSchema = new mongoose.Schema({
    guildID: String,
    userID: String,
    punishments: Array
});

const messageModel = module.exports = mongoose.model('Moderation_System', modSchema);