var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./db/shivom.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the shivom database.');
  });


let count = `SELECT chromosome, COUNT(chromosome) as variants FROM genome GROUP BY chromosome;`;


router.get('/data', function(req, res, next) {
  let response = [];
  db.all(count,[],(err, rows ) => {
    res.send(rows);
  })
});

module.exports = router;




