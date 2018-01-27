var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var objectId = require('mongodb').ObjectID;
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('dbName', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to  database");       
    }
});

router.get('/language', function(req, res, next) {
    console.log(req.query["lang"]);
   if(req.query["lang"]!=null){
        db.collection('reposlist', function(err, collection) {
          collection.find({"payload.pull_request.head.repo.language":req.query["lang"]}).toArray(function(err, items) {
          console.log(items);
          res.send(items);
        });
    });
   }   
});

router.get('/profile', function(req, res, next) {
    console.log(req.query["id"]);
   if(req.query["id"]!=null){
        db.collection('reposlist', function(err, collection) {
          collection.find({"payload.pull_request.head.repo.owner.id":req.query["id"]}).toArray(function(err, items) {
          console.log(items);
          res.send(items);
        });
    });
   }   
});

module.exports = router;




