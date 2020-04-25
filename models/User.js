const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    Type: String,
    required: true
  },
    email: {
      Type: String,
      required: true,
      unique: true
    },
    password: {
      Type: String,
      required: true,
    },
    avatar: {
      Type: String,
    },
    date: {
      Type: Date,
      default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);
