const tasks = require('../schemas/tasks');
const TaskSchema = tasks.schema;
const TaskModel = tasks.model;

/**
 *
 * @constructor
 */
function TaskRepository() {

  /**
   * Gets all tasks from the database.
   */
  this.getAllTasks = function(callback) { // fixme handle promise.
    TaskModel.find({}, callback);
  };

  /**
   * Upserts tasks.
   */
  this.saveTask = function(task) {
    return task.save( (err) => {
      if (!err)
        console.log('Task saved successfully!');
      else
        console.error(err.message);
    });
  };

  /**
   * Deletes the task with the given id.
   */
  this.deleteTask = function(id) {
    return TaskModel.delete(id);
  };

  /**
   * Deletes all tasks from the database.
   */
  this.deleteAllTasks = function(){
    return TaskModel.deleteMany({}, function (err) {
        if(!err)
          console.log('Cleared database.');
        else
          console.error(err.message);
      }
    );
  }
}

module.exports = TaskRepository;
