const axios = require('axios');

exports.homeRoutes = (req,res) => {
    //get request to api
    axios.get('http://localhost:3000/api/type-machine')
        .then(function (response){
            res.render('index', {typeMachines: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.addTypeMachine = (req,res) => {
    res.render('add_type_machine');
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