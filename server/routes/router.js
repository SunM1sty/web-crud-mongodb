const express = require('express');
const route = express.Router();
const services = require('../services/render')

const typeMachineController = require('../controller/type_machine');

/**
 * @description Root Route
 * @method GET /
 */

route.get('/',services.homeRoutes)

/**
 * @description Create a Type Machine
 * @method GET /add-type-machine
 */

route.get('/add-type-machine',services.addTypeMachine);

/**
 * @description Update a Type Machine
 * @method GET /update-type-machine
 */

route.get('/update-type-machine',services.updateTypeMachine);

//API
//Type Machine
route.post('/api/type-machine',typeMachineController.create);
route.put('/api/type-machine/:id',typeMachineController.update);
route.get('/api/type-machine',typeMachineController.find);
route.delete('/api/type-machine/:id',typeMachineController.delete);


module.exports = route