const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const DeviceFirmware = new Schema({
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

module.exports = mongoose.model('DeviceFirmware', DeviceFirmware)
