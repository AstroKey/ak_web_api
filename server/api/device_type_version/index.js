const router = require('express').Router();
const controller = require('./device_type_version.controller');

// // // //

// GET /device_type_versions
router.get('/', controller.list);

// POST /device_type_versions
router.post('/', controller.create);

// GET /device_type_versions/:id
router.get('/:id', controller.show);

// PUT /device_type_versions/:id
router.put('/:id', controller.update);

// DELETE /device_type_versions/:id
router.delete('/:id', controller.delete);

// // // //

module.exports = router;
