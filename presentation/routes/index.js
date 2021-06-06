var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    path: 'index endpoint',
    name: 'API Secretaria',
    status: 'On-line',
  }
  
  res.render('index')
});


module.exports = router;
