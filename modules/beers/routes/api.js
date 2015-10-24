var express = require('express');
var router = express.Router();

var express = require('express');
var Controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.retrieve(req, res);
});

module.exports = router;
