const mongoose = require('mongoose')

const userSchema = mongoose.Schema( {
  name: {
    type: String,
    required: [true, 'Add name please']
  },
  email: {
    type: String,
    required: [true, 'Add email please'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Add password please']
  },
},
{
  timestamp: true
})

module.exports = mongoose.model('User', userSchema)