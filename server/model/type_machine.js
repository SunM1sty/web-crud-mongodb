const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    country: {
        type: String,
        require: false
    },
    brand: {
        type: String,
        require: true,
        unique: true
    }
})

const typeMachineDB = mongoose.model('typeMachineDB', schema);

module.exports = typeMachineDB;