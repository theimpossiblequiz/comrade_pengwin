const mongoose = require('mongoose');

let birthdaySchema = new mongoose.Schema({
    userID: String,
    birthday: String
});

const messageModel = module.exports = mongoose.model('Server_Birthdays', birthdaySchema);