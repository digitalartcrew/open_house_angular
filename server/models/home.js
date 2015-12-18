var mongoose = require("mongoose");

var homeSchema = new mongoose.homeSchema({
	address: String,
	city: String,
	state: String,
	zip: Number
});

var Home = mongoose.model("Home", homeSchema);

module.exports = Home;