const Mongoose = require('mongoose');

const UserSchema = Mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String,
  avatar: String,
});

const User = Mongoose.model('User', UserSchema);

module.exports = User;