const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    birthday: {
        type: Date
    }
})

module.exports = mongoose.model('Person', personSchema)