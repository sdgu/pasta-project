const mongoose = require("mongoose");

const characterInfoSchema = mongoose.Schema(
{
	name: String,
	info: String,
	cards: [String]
})

module.exports = characterInfoSchema;