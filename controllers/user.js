const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      console.log(hash);
      console.log({
        email: req.body.email,
        password: hash
      });
      const user = new User({
        email: req.body.email,
        password: hash
      });
      console.log(user);
      user.save()
        .then(user => res.status(201).json({message: "Created !"}))
        .catch(err => res.status(400).json({err}));
    })
    .catch(err => res.status(500).json({err}))

};

exports.login = (req, res, next) => {

};