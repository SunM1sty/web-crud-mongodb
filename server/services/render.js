exports.homeRoutes = (req,res) => {
    res.render('index');
}

exports.addTypeMachine = (req,res) => {
    res.render('add_type_machine');
}

exports.updateTypeMachine = (req,res) => {
    res.render('update_type_machine');
}