var mongoose = require('mongoose'); 
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/openhouseapp");

module.exports.Home = require("./home");
