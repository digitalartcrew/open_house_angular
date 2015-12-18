var mongoose = require('mongoose'); 
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/openhouseapp");

module.export.Home = require("./home");
