let mongoose = require('mongoose');

// New User model email, password
// email property - required, trim it, type string, min length 1
let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {User}