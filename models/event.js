const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: String,
  contact: {
    type: String,
    required: true,
    trim: true
  }
})

module.exports = mongoose.model('Event', EventSchema)