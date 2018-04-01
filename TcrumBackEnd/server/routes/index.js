const tasksController = require('../controllers').tasks;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;
const userStoriesController = require('../controllers').user_stories;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Routes for the TAREAS table
  app.post('/api/tasks', tasksController.create);  
  app.get('/api/tasks', tasksController.list);
  app.get('/api/tasks/:id', tasksController.retrieve);
  app.put('/api/tasks/:id', tasksController.update);
  app.delete('/api/tasks/:id', tasksController.destroy);

  //Routes for the LOGS table
  app.post('/api/logs', logsController.create);  
  app.get('/api/logs', logsController.list);
  app.get('/api/logs/:id', logsController.retrieve);

  //Routes for the SPRINTS table
  app.post('/api/sprints', sprintsController.create);  
  app.get('/api/sprints', sprintsController.list);
  app.get('/api/sprints/:id', sprintsController.retrieve);
  app.put('/api/sprints/:id', sprintsController.update);
  app.delete('/api/sprints/:id', sprintsController.destroy);

  //Routes for the USER_STORIES table
  app.post('/api/user_stories', userStoriesController.create);  
  app.get('/api/user_stories', userStoriesController.listWithSprint);
  app.get('/api/user_stories', userStoriesController.listWithProject);
  app.get('/api/user_stories/:id', userStoriesController.retrieveWithSprint);
  app.get('/api/user_stories/:id', userStoriesController.retrieveWithProject);
  app.put('/api/user_stories/:id', userStoriesController.update);
  app.delete('/api/user_stories/:id', userStoriesController.destroy);
};