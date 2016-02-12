/**
 * Created by sean.villagracia on 2/10/2016.
 */
var express = require('express');
var Blog = require('../models/blogs');
var router = express.Router();

router.route('/')
  .get(function (req, res) {
    Blog.find({}, function (err, blog) {
      if (err) return res.status(500).send(err);
      res.send(blog);
    });
  })
  .post(function (req, res) {
    console.log('request: ', req.body);
    //Blog.create({
    //
    //})
  })

module.exports = router;