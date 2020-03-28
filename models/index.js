// ---------------------------------------- DATABASE ---------------------------------------- //
const mongoose = require('mongoose')
// MongoDB Connection String
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cvwellness';

// Connect MongoDB
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(`MongoDB error: ${err}`));

  module.exports = {
      Problem: require('./problem'),
      Solution: require('./solution') 
  }