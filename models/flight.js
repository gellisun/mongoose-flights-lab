const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['SYD', 'FCO', 'SFO', 'HND', 'DPS'],
    },
    arrival: Date
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['Emirates Airlines', 'Cathay Pacific', 'American Airlines']
    },
    airport: {
        type: String,
        enum: ['DXB', 'LGW', 'MXP', 'JFK', 'LAX'],
        default: 'JFK'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: () => new Date(+new Date() + 7*24*60*60*1000).toLocaleDateString()
    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);