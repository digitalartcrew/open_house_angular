var express = require("express");
var router = express.Router();
var db = require("../models");

//Index GET /api/homes/

router.get('/', function(req,res){
	db.Home.find({}, function(err,homes){
		res.status(200).send(homes);
	});
});

//Create POST /api/homes/

router.post('/', function(req,res){
	db.Home.create(req.body,function(err,home){
		res.status(201).send(home);
	});
});

//Get SHOW /api/homes/:id

router.get('/:id', function(req,res){
	db.Home.findById(req.params.id, function(err,home){
		res.status(200).send(home);
	});
});

//Update PUT /api/homes/:id

router.put('/:id',function(req,res){
	db.Home.findByIdAndUpdate(req.params.id,req.body, function(err,home){
		 if (err) res.status(500).send({error: "Double check for error"});
		res.status(201).send(home);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Home.findByIdAndRemove(req.params.id, function(err,home){
		res.status(200).send(home);
	});
});

module.exports = router;

