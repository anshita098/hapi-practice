const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  userId: Number,
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);


