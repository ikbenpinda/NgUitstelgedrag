const TaskModel = require('../database/schemas/tasks').model;
const TaskRepository = require('../database/repositories/taskrepository');

module.exports = {

  /**
   * Resets the database and inserts mock data.
   */
  insertMockData: function(){

    const taskRepository = new TaskRepository();

    taskRepository.deleteAllTasks();

    let task1 = new TaskModel();
    task1.title = 'Developer - In Pure Form 18';
    task1.isCompleted = false;
    let task2 = new TaskModel();
    task2.title = 'Electric Rescue - Texture Shot(Inigo Kennedy Remix)';
    task2.isCompleted = false;
    let task3 = new TaskModel();
    task3.title = 'Charlotte De Witte - Motion';
    task3.isCompleted = false;
    let task4 = new TaskModel();
    task4.title = 'Oscar Mulero - Triad';
    task4.isCompleted = false;
    let task5 = new TaskModel();
    task5.title = 'Dax J - Distant Futures';
    task5.isCompleted = false;
    let task6 = new TaskModel();
    task6.title = 'Developer - Ruthless Charm';
    task6.isCompleted = false;
    let task7 = new TaskModel();
    task7.title = 'Remco Beekwilder - Nightlife';
    task7.isCompleted = false;
    let task8 = new TaskModel();
    task8.title = 'Gijensu - Year 5050';
    task8.isCompleted = false;
    let task9 = new TaskModel();
    task9.title = 'Electric Rescue - She Is...';
    task9.isCompleted = false;
    let task10 = new TaskModel();
    task10.title = 'Farrago - Risin\'(Kobosil Apathy Remix)';
    task10.isCompleted = false;
    // This might seem redundant, but do you really need a saveTasks()?
    // Keep it simple, refactor this when you need to.
    taskRepository.saveTask(task1);
    taskRepository.saveTask(task2);
    taskRepository.saveTask(task3);
    taskRepository.saveTask(task4);
    taskRepository.saveTask(task5);
    taskRepository.saveTask(task6);
    taskRepository.saveTask(task7);
    taskRepository.saveTask(task8);
    taskRepository.saveTask(task9);
    taskRepository.saveTask(task10);
  }
};
