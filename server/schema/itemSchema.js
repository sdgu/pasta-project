const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
{
	name: String,
	desc: String,
	lore: String,
	img: String

})

module.exports = itemSchema;