const router = require('express').Router();
const controller = require('./device_type.controller');

// // // //

// GET /device_types
router.get('/', controller.list);

// POST /device_types
router.post('/', controller.create);

// GET /device_types/:id
router.get('/:id', controller.show);

// PUT /device_types/:id
router.put('/:id', controller.update);

// DELETE /device_types/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
