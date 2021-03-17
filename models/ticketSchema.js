const mongoose = require('mongoose');

let ticketSchema = new mongoose.Schema({
    guildID: String,
    userID: String,
    ticket: Array
});

const messageModel = module.exports = mongoose.model('Tickets', ticketSchema);