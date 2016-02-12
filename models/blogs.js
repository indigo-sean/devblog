/** Created by sean.villagracia on 2/10/2016. ...*/
var mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
  user_id: String,
  title: String,
  body: String
});

module.exports = Blog;