const express = require('express');
const router = express.Router();
const GaugeRequestController = require('../controllers/GaugeRequestController');

router.get('/', GaugeRequestController.getAll);
router.get('/:reqID', GaugeRequestController.getByID);
router.post('/', GaugeRequestController.create);
router.patch('/:reqID', GaugeRequestController.update);