const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    dateIssue: {
        type: Number,
        require: true
    },
    typeMachine: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'typeMachineDB'
    }
})

const machineDB = mongoose.model('machineDB', schema);

module.exports = machineDB;