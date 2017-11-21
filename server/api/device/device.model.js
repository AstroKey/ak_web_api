const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const Device = new Schema({
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

module.exports = mongoose.model('Device', Device)
