const mongoose = require('mongoose')
Schema = mongoose.Schema

const solutionSchema = new Schema({
    name: String,
    description: String,
    image: String,
    link: String
})

const Solution = mongoose.model('Solution', solutionSchema)
module.exports = Solution
