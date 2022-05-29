var repairDB = require('../model/repair');

//create a new row

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message: "fill the forms below"});
        return;
    }

    const repair = new repairDB({
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        typeRepair: req.body.typeRepair,
        machine: req.body.machine,
    })

    repair
        .save(repair)
        .then(data => {
            res.send(data);
            //res.redirect('/add-repair');
        })
        .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while creating a Create" });});
}

//return single type repair or all types repair

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        repairDB.findById(id).populate('typeRepair').populate('machine')
            .then(data => {
                if(!data){
                    res.status(404).send({message: err.message || "Not found repair with that id"})
                } else {
                    res.send(data);
                }
            })
            .catch(err =>{res.status(500).send({message: "Error while retrieving repair with that id"});});
    }else{
        repairDB.find().populate('typeRepair').populate('machine')
            .then(repair => {
                res.send(repair)
            })
            .catch(err =>{res.status(500).send({message: err.message || "Some errors occurred while retrieving a Find" });});
    }
}

//update a row in the collection by type repair id

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }
    
    const id = req.params.id;
    repairDB.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Update a row with that id'});
            }else {
                res.send(data);
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Update repair information"})
        })
}

//delete a row in the collection

exports.delete = (req,res) => {
    const id = req.params.id;
    repairDB.findByIdAndDelete(id)
        .then(data =>{
            if(!data) {
                res.status(404).send({message: 'Cannot Delete a row with that id'});
            }else {
                res.send({message: "Row was deleted successfully "});
            }
        })
        .catch(error => {
            res.status(500).send({message: "Error Delete repair with id = " + id})
        })
}
