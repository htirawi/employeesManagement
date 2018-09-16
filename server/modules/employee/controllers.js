const models = require('./models');
const bcrypt = require('bcrypt');

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.sendStatus(200);
  })
};

//to check if the user exists in the database
exports.signinUser = function (req, res) {
  models.User.findOne({email: req.body.user.email}, function (err, user) {
    if (user === null) {
      res.send({msg: "no account", user: null})
    } else if (user !== null) {
      if (err) {
        res.status(404).send({msg: "no account", user: null})
      }
      if (user !== null) {
        bcrypt.compare(req.body.user.password, user.password, function (err, resCrypt) {
          if (!resCrypt) {
            res.status(500).send({msg: "the password is not correct"})
          } else if (resCrypt) {
            req.session._id = user._id;
            req.session.username = user.username;
            req.session.password = user.password;
            res.status(201).send({msg: "success login", user: user})
          }
        });
      }
    }
    ;
  })
}
