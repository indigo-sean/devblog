/**
 * Created by sean.villagracia on 2/11/2016.
 */
var express = require('express');
var User = require('../models/users');
var router = express.Router();

router.route('/')
  .get(function (req, res) {
    User.find({}, function (err, obj) {
      if (err) return res.status(500).send(err);
      res.send(obj);
    });
  })
  .post(function (req, res) {
  User.create({
    userName: req.body.userName,
    email: req.body.email
  }, function (err, obj) {
    if (err) console.log('err: ', err);
    res.send(obj);
  });
});



module.exports = router;