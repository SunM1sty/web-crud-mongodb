const axios = require('axios');

exports.typeMachine = (req,res) => {
    //get request to api
    axios.get('http://localhost:3000/api/type-machine')
        .then(function (response){
            res.render('type_machine', {typeMachines: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.machine = (req,res) => {
    //get request to api
    axios.get('http://localhost:3000/api/machine')
        .then(function (response){
            res.render('machine', {machines: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.homeRoutes = (req,res) => {
    res.render('index');
}

exports.addTypeMachine = (req,res) => {
    res.render('add_type_machine');
}

exports.addMachine = (req,res) => {
    axios.get('http://localhost:3000/api/type-machine')
        .then(function (response){
            res.render('add_machine', {typeMachines: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.updateTypeMachine = (req,res) => {
    axios.get('http://localhost:3000/api/type-machine',{params: {id: req.query.id}})
        .then(function (typeMachineData){
            res.render('update_type_machine', {typeMachines: typeMachineData.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.updateMachine = (req,res) => {
    let data = {};
    axios.get('http://localhost:3000/api/type-machine')
    .then(function (response){
        data = response.data;
    })
    axios.get('http://localhost:3000/api/machine',{params: {id: req.query.id}})
        .then(function (machineData){
            res.render('update_machine', {machines: machineData.data, typeMachines: data});
        })
        .catch(err =>{
            res.send(err);
        })
}



