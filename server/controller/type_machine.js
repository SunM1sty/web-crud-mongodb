var typeMachineDB = require('../model/type_machine');

//create a new row

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "fill the forms below"});
        return;
    }

    const typeMachine = new typeMachineDB({
        country: req.body.country,
        brand: req.body.brand
    })

    typeMachine
        .save(typeMachine)
        .then(data => {
            //res.send(data);
            res.redirect('/add-type-machine');
        })
        .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while creating a Create" });});
}

//return single type machine or all types machine

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        typeMachineDB.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: err.message || "Not found type machine with that id"})
                } else {
                    res.send(data);
                }
            })
            .catch(err =>{res.status(500).send({message: "Error while retrieving type machine with that id"});});
    }else{
        typeMachineDB.find()
            .then(typeMachine => {
                res.send(typeMachine)
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
    typeMachineDB.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Update a row with that id'});
            }else {
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Update type machine information"})
        })
}

//delete a row in the collection

exports.delete = (req,res) => {
    const id = req.params.id;
    typeMachineDB.findByIdAndDelete(id)
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Delete a row with that id'});
            }else {
                res.send({message: "Row was deleted successfully "});
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Delete type machine with id = " + id})
        })
}
