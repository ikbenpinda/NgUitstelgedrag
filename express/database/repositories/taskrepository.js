const tasks = require('../schemas/tasks');
const TaskSchema = tasks.schema;
const TaskModel = tasks.model;

/**
 * Database repository for all task-related database queries.
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
  this.saveTask = function(task, callback) {
    task.save(task, callback);
  };

  /**
   * Deletes the task with the given id.
   */
  this.deleteTask = function(id, callback) {
    TaskModel.deleteOne({_id: id}, callback);
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
