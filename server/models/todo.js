let mongoose = require('mongoose');

// Create model
let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number, // Unix timestamp
    default: null
  }
  // Mongo object id already has time built in so no need for a createdAt value
});

module.exports = {Todo};