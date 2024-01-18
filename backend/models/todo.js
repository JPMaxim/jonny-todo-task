// to define what the todoItem will look like
const mongoose = require('mongoose')

// get schema from mongoose object
const Schema = mongoose.Schema
// what the data will look like
const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'error: title not found'
    },
    description: {
        type: String,
        required: true,
        default: 'error: description not found'
    }
})

module.exports = mongoose.model('Todo', todoSchema)