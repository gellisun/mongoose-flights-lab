const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function newTicket (req, res) {
    const flightId = req.params.id;
    res.render(`tickets/new`, {title: 'Add Ticket', flightId});
}

async function create(req, res) {
    try {
        req.body.flight = req.params.id;
        const ticket = await Ticket.create(req.body);
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`);
}

module.exports = {
    new: newTicket,
    create
}