const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true,'please enter an email'],
    unique: true,
    lowercase: true,
    validate:[isEmail,'please enter a valid email']
  },
  password: {
    type: String,
    required: [true,'please enter an password'],
    minlength:[ 6,'Minimun password length is 6 characters']
  }
});

const User = mongoose.model('user', userSchema);

module.exports = User;