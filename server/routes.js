const router = require('express').Router()

// // // //

// Bootstrap API routers
router.use('/auth', require('./api/auth'))
router.use('/users', require('./api/user'))
router.use('/devices', require('./api/device'))

// // // //

module.exports = router
