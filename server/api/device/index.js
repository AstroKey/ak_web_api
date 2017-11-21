const router = require('express').Router();
const controller = require('./device.controller');

// // // //

// GET /devices
router.get('/', controller.list);

// POST /devices
router.post('/', controller.create);

// GET /devices/:id
router.get('/:id', controller.show);

// PUT /devices/:id
router.put('/:id', controller.update);

// DELETE /devices/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
