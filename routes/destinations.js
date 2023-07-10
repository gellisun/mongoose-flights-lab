const express = require('express');
const router = express.Router();

const arrivalsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', arrivalsCtrl.create);

module.exports = router;