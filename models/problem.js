const mongoose = require('mongoose')
Schema = mongoose.Schema

const problemSchema = new Schema({
    name: String,
    description: String,
    image: String

})

const Problem = mongoose.model('Problem', problemSchema)
model.exports = Problem
