const router = require('express').Router();
const controller = require('./device_firmware.controller');

// // // //

// GET /device_firmware
router.get('/', controller.list);

// POST /device_firmware
router.post('/', controller.create);

// GET /device_firmware/:id
router.get('/:id', controller.show);

// PUT /device_firmware/:id
router.put('/:id', controller.update);

// DELETE /device_firmware/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
