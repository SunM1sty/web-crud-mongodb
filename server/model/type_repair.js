const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    duration: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
})

const typeRepairDB = mongoose.model('typeRepairDB', schema);

module.exports = typeRepairDB;