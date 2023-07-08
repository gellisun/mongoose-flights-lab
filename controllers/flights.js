const Flight = require('../models/flight');

async function index(req, res) {
    try {
        const flights = await Flight.find({}).sort({departs: 1});
        res.render('flights/index', { flights, title: 'All Flights' });
    } catch(err) {
        console.log(err);
        res.redirect('/');
    }
}

function newFlight(req, res) {
    const newFlight = new Flight();
    res.render('flights/new', { errorMsg: '', title: 'Add New Flight', newFlight})
}

async function create(req, res) {
    let input = req.body.flightNo;
    input = parseInt(input);
    let date = req.body.departs;
    // date = parseInt(date);
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('/flights/new', { errorMsg: err.message });
    }
}

module.exports = {
    index,
    new: newFlight,
    create
}