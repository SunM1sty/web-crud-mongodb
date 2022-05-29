var machineDB = require('../model/machine');

//create a new row

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "fill the forms below"});
        return;
    }

    const machine = new machineDB({
        dateIssue: req.body.dateIssue,
        typeMachine: req.body.typeMachine
    })

    machine
        .save(machine)
        .then(data => {
            res.send(data);
            //res.redirect('/add-machine');
        })
        .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while creating a Create" });});
}

//return single type machine or all types machine

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        machineDB.findById(id).populate('typeMachine')
            .then(data => {
                if(!data){
                    res.status(404).send({message: err.message || "Not found machine with that id"})
                } else {
                    res.send(data);
                }
            })
            .catch(err =>{res.status(500).send({message: "Error while retrieving machine with that id"});});
    }else{
        machineDB.find().populate('typeMachine')
            .then(machine => {
                res.send(machine)
            })
            .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while retrieving a Find" });});
    }
}

//update a row in the collection by type machine id

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    
    const id = req.params.id;
    machineDB.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Update a row with that id'});
            }else {
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Update machine information"})
        })
}

//delete a row in the collection

exports.delete = (req,res) => {
    const id = req.params.id;
    machineDB.findByIdAndDelete(id)
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Delete a row with that id'});
            }else {
                res.send({message: "Row was deleted successfully "});
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Delete machine with id = " + id})
        })
}
