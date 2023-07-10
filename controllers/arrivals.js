const Flight = require('../models/flight');

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.arrivals.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.render(`/flights/${flight._id}`);
}

module.exports = {
    create
}