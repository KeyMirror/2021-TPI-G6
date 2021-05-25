var express = require('express');
var router = express.Router();

const { Response } = require('../utils/'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    path: 'index "/" endpoint',
    name: 'API Secretaria',
    status: 'On-line',
  }
  Response.success(res, data)
});

module.exports = router;
