const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save()
        .then(user => res.status(201).json({message: "Created !"}))
        .catch(err => res.status(400).json({err}));
    })
    .catch(err => res.status(500).json({err}))

};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        res.status(404).json({
          message: "User not found"
        })
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            res.status(401).json({
              message: "Invalid password !"
            })
          }
          res.status(200).json({
            userId: user._id,
            token: "NOT YET CREATED"
          })
        })
        .catch(err => res.status(500).json({ err }))
    })
    .catch(err => res.status(500).json({ err }))
};