var typeRepairDB = require('../model/type_repair');

//create a new row

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "fill the forms below"});
        return;
    }

    const typeRepair = new typeRepairDB({
        name: req.body.name,
        duration: req.body.duration,
        price: req.body.price,
        notes: req.body.notes
    })

    typeRepair
        .save(typeRepair)
        .then(data => {
            res.send(data);
            //res.redirect('/add-type-repair');
        })
        .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while creating a Create" });});
}

//return single type RetypeRepair or all types RetypeRepair

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        typeRepairDB.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: err.message || "Not found type typeRepair with that id"})
                } else {
                    res.send(data);
                }
            })
            .catch(err =>{res.status(500).send({message: "Error while retrieving type typeRepair with that id"});});
    }else{
        typeRepairDB.find()
            .then(typeRepair => {
                res.send(typeRepair)
            })
            .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while retrieving a Find" });});
    }
}

//update a row in the collection by type RetypeRepair id

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    
    const id = req.params.id;
    typeRepairDB.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Update a row with that id'});
            }else {
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Update type typeRepair information"})
        })
}

//delete a row in the collection

exports.delete = (req,res) => {
    const id = req.params.id;
    typeRepairDB.findByIdAndDelete(id)
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Delete a row with that id'});
            }else {
                res.send({message: "Row was deleted successfully "});
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Delete type RetypeRepair with id = " + id})
        })
}
