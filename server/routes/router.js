const express = require('express');
const route = express.Router();
const services = require('../services/render')

const typeMachineController = require('../controller/type_machine');
const typeRepairController = require('../controller/type_repair');
const machineController = require('../controller/machine');
const repairController = require('../controller/repair');

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

//Machine
route.post('/api/machine',machineController.create);
route.put('/api/machine/:id',machineController.update);
route.get('/api/machine',machineController.find);
route.delete('/api/machine/:id',machineController.delete);

//Type Repair
route.post('/api/type-repair',typeRepairController.create);
route.put('/api/type-repair/:id',typeRepairController.update);
route.get('/api/type-repair',typeRepairController.find);
route.delete('/api/type-repair/:id',typeRepairController.delete);


//Repair
route.post('/api/repair',repairController.create);
route.put('/api/repair/:id',repairController.update);
route.get('/api/repair',repairController.find);
route.delete('/api/repair/:id',repairController.delete);


module.exports = route