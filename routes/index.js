var express = require('express');
var pgp = require('pg-promise')();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = pgp('postgres://postgres:khoa@localhost:5555/postgres')
  res.render('index', { title: 'Express' });
});

module.exports = router;
