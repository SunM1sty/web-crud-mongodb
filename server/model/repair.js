const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    dateStart: {
        type: Date,
        require: false
    },
    dateEnd: {
        type: Date,
        require: false
    },
    typeRepair: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'typeRepairDB'
    },
    machine: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'machineDB'
    }
})

const repairDB = mongoose.model('repairDB', schema);

module.exports = repairDB;