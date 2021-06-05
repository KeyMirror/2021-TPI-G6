const express = require('express');
const router = express.Router();
const { notificationsController } = require('../controllers'); 

router.get('/:cuit', notificationsController.statusQuery);

module.exports = router; 