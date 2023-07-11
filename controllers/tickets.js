const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

async function newTicket (req, res) {
    const tickets = await Ticket.find({});
    res.render(`tickets/new`, {title: 'Add Ticket', tickets});
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        await Ticket.create(req.body);
    } catch (err) {
        console.log(err);
    }
    res.redirect('/flights/show')
}

module.exports = {
    new: newTicket,
    create
}