const express = require('express');
const router = express.Router();
const TaskRepository = require('../../database/repositories/TaskRepository');

/**
 * An Express router for the /tasks endpoint of the REST API.
 * @constructor
 */
// function TaskRouter() {

  const taskRepository = new TaskRepository();
  //
  // /**
  //  * The base GET-request route for the /tasks endpoint.
  //  */
  // this.get = function () {

    // When using Express, make sure not to swap the order of request/response,
    // or all functions will be undefined.
    router.get('/', (request, response) => {

      // Requests from the frontend will be blocked due to the Same Origin Policy.
      // To make sure the requests are approved, we enable Cross-Origin Resource Sharing.
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      taskRepository.getAllTasks(function (err, results) {
        if (err) {
          console.error(err.message);
          response.send(err.message);
        }
        else {
          console.log('Found ' + results.length + ' results.');
          response.send(results);
        }
      });
    // });
  //
  // };

});

module.exports = router;
