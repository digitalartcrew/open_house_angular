var mongoose = require("mongoose");

var homeSchema = new mongoose.Schema({
	address: String,
	city: String,
	state: String,
	zip: Number
});

module.exports = mongoose.model("Home", homeSchema);