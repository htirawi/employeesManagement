const appRouter = require('express').Router();
const appControllers = require('./controllers');


appRouter.route('/').get((req, res) => {
  const t = {msg: 'YOU ARE CONNECTED TO THE SERVER)'};
  res.status(200).send(t);
});

appRouter.route('/login').post((req, res) => {
  appControllers.signinUser(req, res);
});

appRouter.route('/logout').post((req, res) => {
  appControllers.logoutUser(req, res);
});

appRouter.route('/addEquipment').post((req, res) => {
  appControllers.addEquipment(req, res);
});

appRouter.route('/updateEquipment').put((req, res) => {
  appControllers.updateEquipment(req, res);
});

appRouter.route('/deleteEquipment').post((req, res) => {
  appControllers.deleteEquipment(req, res);
});

appRouter.route('/addEmployee').post((req, res) => {
  appControllers.addEmployee(req, res);
});

appRouter.route('/updateEmployee').put((req, res) => {
  appControllers.updateEmployee(req, res);
});

appRouter.route('/deleteEmployee').post((req, res) => {
  appControllers.deleteEmployee(req, res);
});

appRouter.route('/addProject').post((req, res) => {
  appControllers.addProject(req, res);
});

appRouter.route('/updateProject').put((req, res) => {
  appControllers.updateProject(req, res);
});

appRouter.route('/deleteProject').post((req, res) => {
  appControllers.deleteProject(req, res);
});


module.exports = appRouter;
