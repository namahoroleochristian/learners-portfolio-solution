const express = require('express');
const router = express.Router();
const googleDriveController = require('../controllers/googleDriveController');

router.post('/upload', googleDriveController.uploadPortfolio);
router.get('/list', googleDriveController.getPortfolios);

module.exports = router;
