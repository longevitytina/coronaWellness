const mongoose = require('mongoose')
const Solution = require('./solution')
Schema = mongoose.Schema

const ProblemSchema = new Schema({
    name: String,
    description: String,
    image: String,
    solutions: [Solution.schema],
})

const Problem = mongoose.model('Problem', ProblemSchema)
module.exports = Problem
