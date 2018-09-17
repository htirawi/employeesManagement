const models = require('./models');
const bcrypt = require('bcrypt');

exports.addEquipment = (req, res) => {
  const {name} = req.body;
  const {serialNumber} = req.body;
  const {attachment} = req.body;
  let Equipment = new models.Equipment({
    name,
    serialNumber,
    attachment
  });
  Equipment.save((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  })
};

exports.updateEquipment = (req, res) => {
  const {name} = req.body;
  const {serialNumber} = req.body;
  const {attachment} = req.body;
  const {id} = req.body;
  models.Equipment.findOneAndUpdate({_id: id}, {$set: {name, serialNumber, attachment}}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.deleteEquipment = (req, res) => {
  const {id} = req.body;
  models.Equipment.findOneAndDelete({_id: id}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  })
};

exports.addEmployee = (req, res) => {
  const {name} = req.body;
  const {nationality} = req.body;
  const {jobTitle} = req.body;

  let Employee = new models.Employee({
    name,
    nationality,
    jobTitle
  });
  Employee.save((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  })
};

exports.updateEmployee = (req, res) => {
  const {name} = req.body;
  const {nationality} = req.body;
  const {jobTitle} = req.body;
  const {id} = req.body;
  models.Employee.findOneAndUpdate({_id: id}, {$set: {name, nationality, jobTitle}}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.deleteEmployee = (req, res) => {
  const {id} = req.body;
  models.Employee.findOneAndDelete({_id: id}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  })
};

//add project from data-base
exports.addProject = (req, res) => {
  const {name} = req.body;
  const {type} = req.body;
  const {fromDate} = req.body;
  const {toDate} = req.body;
  let project = models.Project({
    name,
    type,
    fromDate,
    toDate
  });
  project.save((err) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  })
};

exports.updateProject = (req, res) => {
  const {name} = req.body;
  const {type} = req.body;
  const {fromDate} = req.body;
  const {toDate} = req.body;
  const {id} = req.body;
  models.Project.findOneAndUpdate({_id: id}, {$set: {name, type, fromDate, toDate}}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.deleteProject = (req, res) => {
  const {id} = req.body;
  models.Project.findOneAndDelete({_id: id}, (err) => {
    if (err) {
      return next(err);
    } else {
      res.sendStatus(200);
    }
  })
};


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
  })
};
