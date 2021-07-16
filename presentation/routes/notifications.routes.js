const express = require('express');
const router = express.Router();
const { notificationsController } = require('../controllers'); 

router.get('/', notificationsController.statusQuery);
router.get('/all', notificationsController.getAllNotifications);

module.exports = router; 