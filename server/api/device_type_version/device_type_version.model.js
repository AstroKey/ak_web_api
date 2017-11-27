const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const DeviceTypeVersion = new Schema({
    label: String
},
    // Collection options
    {
        timestamps: {
            createdAt: 'createdOn',
            updatedAt: 'updatedOn'
        },
        versionKey: false
    }
);

// // // //

module.exports = mongoose.model('DeviceTypeVersion', DeviceTypeVersion)
