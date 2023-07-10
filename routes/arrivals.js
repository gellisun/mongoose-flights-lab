const express = require('express');
const router = express.Router();

const arrivalsCtrl = require('../controllers/arrivals');

router.post('/:id', arrivalsCtrl.create);

module.exports = router;