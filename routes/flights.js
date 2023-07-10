var express = require('express');
var router = express.Router();

var flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);
// POST /flights
router.post('/', flightsCtrl.create);
// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

module.exports = router;
