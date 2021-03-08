const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  eddies: { type: Number, default: 1000 },
  bank: { type: Number },
});

const model = mongoose.model("currency_system", profileSchema);

module.exports = model;