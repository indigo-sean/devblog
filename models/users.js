/**
 * Created by sean.villagracia on 2/11/2016.
 */
var mongoose = require('mongoose');

var User = mongoose.model('User', {
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = User;