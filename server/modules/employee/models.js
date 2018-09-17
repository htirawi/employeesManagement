const mongoose = require('mongoose');

//equipment schema to store equipment details.
const equipmentSchema = new mongoose.Schema({
  Id: {type: String, index: {unique: true}},
  name: {type: String, trim: true},
  serialNumber: {type: Number, default: 0},
  attachment: String
});

//employee schema for employee info
const empSchema = new mongoose.Schema({
  Id: {type: String, index: {unique: true}},
  name: {type: String, trim: true},
  nationality: {type: String, trim: true},
  jobTitle: {type: String, trim: true}
});


//admin schema for admin credentials
const adminSchema = new mongoose.Schema({
  Id: {type: String, index: {unique: true}},
  name: String,
  password: String
});


//Project schema to store projects
const projectSchema = new mongoose.Schema({
  Id: {type: String, index: {unique: true}},
  name: {type: String, trim: true},
  type: {type: String, trim: true},
  fromDate: {type: Date, default: Date.now},
  toDate: {type: Date, default: Date.now}
});

const Employee = mongoose.model('Employee', empSchema);
const Equipment = mongoose.model('Equipment', equipmentSchema);
const Project = mongoose.model('Project', projectSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
  Employee: Employee,
  Equipment: Equipment,
  Project: Project,
  Admin: Admin
};

