var express = require('express');
var router = express.Router();

const { Response } = require('../utils/'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  message = {
    path: 'index endpoint',
    name: 'API Secretaria',
    status: 'On-line',
  }
  const data = {
    message,
  }
  Response.success(res, data)
});

module.exports = router;
