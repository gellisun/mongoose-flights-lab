const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// GET /tickets/new
router.get('/:id/new', ticketsCtrl.new);

// POST /tickets
router.post('/tickets/:id/new', ticketsCtrl.create);

module.exports = router;