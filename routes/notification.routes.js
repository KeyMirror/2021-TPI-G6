const express = require('express');
const router = express.Router();
const { notificationController } = require('../controllers'); 

router.get('/:cuit', notificationController.daysController); 

module.exports = router; 