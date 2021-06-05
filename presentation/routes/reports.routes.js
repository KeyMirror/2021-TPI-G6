const express = require('express');
const router = express.Router();
const { reportsController } = require('../controllers'); 

router.get('/', reportsController.getAll);

module.exports = router; 