//
// //db connection
// require('./config/dbconfig');
//
// //server listening
//
// const app=require('./index');
//
// const PORT = process.env.PORT || 4200;
//
// app.listen(PORT, function() {
//   console.log(`listening on PORT ${PORT}`);
// });

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/employees'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/employees/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
