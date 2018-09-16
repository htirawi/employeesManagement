const express= require('express');

const session = require('express-session');

//require  middlewares
const bodyParser=require('body-parser');
const morgan=require('morgan');

let app = module.exports =express();


//use middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));	
app.use(bodyParser.json());
app.use(session({secret:'this is secret'
}));

// add the router
const appRouter=require('./modules/employee/routes');
app.use('/',appRouter);
