const mongoose = require('mongoose');
//to avoid deprecating warnings of mongodb promise
mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost/homeDb');
mongoose.connect('mongodb://user:12345H@ds259802.mlab.com:59802/management');

const db = mongoose.connection;

db.on('error', function(){
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

module.exports = db;
