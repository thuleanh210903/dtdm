const mongoose = require( "mongoose")
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    created: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Class', classSchema)