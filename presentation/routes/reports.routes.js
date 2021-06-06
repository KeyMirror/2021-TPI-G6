const express = require('express');
const router = express.Router();
const { reportsController } = require('../controllers'); 

router.get('/', reportsController.getAllReports);
router.get('/cuit', reportsController.getAllCuits);
router.get('/company', reportsController.getAllCompanies);
router.get('/company/:cuit', reportsController.getByCuit);



module.exports = router; 