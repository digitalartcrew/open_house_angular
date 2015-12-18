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
	db.Home.findByAndUpdate(req.params.id,req.body, function(err,home){
		res.status(200).send(home);
	});
});

//Delete 

router.delete('/:id', function(req,res){
	db.Home.findByAndRemove(req.params.id, function(err,home){
		res.status(200).send(home);
	});
});