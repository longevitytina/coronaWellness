const mongoose = require('mongoose')
Schema = mongoose.Schema

const ProblemSchema = new Schema({
    name: String,
    description: String,
    image: String

})

const Problem = mongoose.model('Problem', ProblemSchema)
module.exports = Problem
