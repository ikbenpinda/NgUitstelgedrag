const express = require('express');
const router = express.Router();
const TaskRepository = require('../../database/repositories/TaskRepository');
const taskRepository = new TaskRepository();
const TaskModel = require('../../database/schemas/tasks').model; // FIXME layering.

// When using Express, make sure not to swap the order of request/response,
// or all functions will be undefined.

/**
 * The following code is executed regardless of request method.
 * This enables some reduction in boilerplate, like when dealing with the Same Origin Policy,
 * Parameter next is used to continue routing after this function is executed.
 */
router.all('*', (request, response, next) => {

  // Requests from the frontend will be blocked due to the Same Origin Policy.
  // To make sure the requests are approved, we enable Cross-Origin Resource Sharing.
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // For some reason this needs to be added fo .all().
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Route for retrieving tasks.
 */
router.get('/', (request, response) => {

  taskRepository.getAllTasks((err, results) => {
    if (err) {
      console.error(err.message);
      response.status(500).send(err.message);
      return;
    }

    console.log('Found ' + results.length + ' results.');
    response.status(200).send(results);
  });
});

/**
 * Route for creating new tasks.
 */
router.post('/', (request, response) => { // fixme - move validation to separate layer.

  let taskData = request.body;
  console.log(`Received data for new task: ${JSON.stringify(taskData, null, 2)}`);

  if (!taskData._title || taskData._title === '' || taskData._title.length > 255) {
    response.status(400).send(); // Bad Request
    return;
  }

  let newTask = new TaskModel();
  newTask.title = taskData._title;
  newTask.isCompleted = false;

  taskRepository.saveTask(newTask, (err, savedTask) => {
    if (!err) {
      console.log(`Task saved successfully: ${JSON.stringify(savedTask, null, 2)}`);
      response.status(201).send(savedTask); // Created
    }
    else {
      console.error(err.message);
      response.status(500).send(err.message);
    }
  });
});

/**
 *  Route for deletion of tasks.
 *  Expects an ObjectId in the request body of the item to delete.
 */
router.delete('/:task_id', (request, response) => {

  let task_id = request.params['task_id']; // The request.body is not populated until BodyParser is used.

  taskRepository.deleteTask(task_id, (err, result) => {

    console.log(`Result: ${JSON.stringify(result)}`);

    if (err) {
      console.error(err.message);
      response.status(500).send(err.message);
      return;
    }

    if (result.n > 0) {
      console.log(`Deleted task with id ${task_id}`);
      response.status(200).send(true);
    }
    else {
      console.log(`Task with id ${task_id} was not found.`);
      response.status(404).send(false);
    }

  });
});

// Contrary to TaskRepository.js, we are calling functions directly on a predefined router(express.router),
// That's why it makes less sense to wrap everything in a function as seen in the TaskRepository.js file.
// Here the instance itself is directly exported.

/**
 * An Express router for the /tasks endpoint of the REST API.
 */
module.exports = router;
