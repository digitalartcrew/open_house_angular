var express = require("express"),
	app = express(),
	homeRoutes = require('./routes/homes'),

	bodyParser = require('body-parser'),
	path = require("path");
	morgan = require("morgan");


app.use('/js', express.static(path.join(__dirname, "../client/js")));
app.use('/css', express.static(path.join(__dirname, "../client/css")));
app.use('/templates', express.static(path.join(__dirname, "../client/templates")));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('api/routes', homeRoutes);

app.get('*', function(req,res){
	res.sendFile(path.join(_dirname, "../client", "index.html"));
});

app.listen(3000, function(){
	console.log("Listening on Port 3000");
});