import { Component } from '@angular/core';
import {Task} from './task/task.model';
import {ServiceComponent} from './service/service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'techno weekly';
  model: Task = new Task('', '', false);
  tasks: Task[] = [];

  constructor(private backend: ServiceComponent) {
    this.getAllTasks();
  }

  /**
   * Gets all tasks from the backend and maps them to an Angular model of a task (task.model.ts).
   */
  getAllTasks() {
    // Because the observable is initially empty, we subscribe for changes(incoming data).
    this.backend.getAllTasks()
      .subscribe((data: any[]) => { // fixme - is this the right place for subscribe?

        // This custom mapping is needed to make the getters/setters work for a Task instance.
        // An alternative would be public fields, or 1-to-1 copies of the backend data.
        // However, that would break encapsulation and possibly cause a security risk with more elaborate data.
        // Note the use of the "data: any[]" type declaration to map any field to a task.
        this.tasks = data.map(task => new Task(task._id, task.title, task.isCompleted));
        console.log(`Response from server: ${JSON.stringify(data, null, 2)}`);
        // this.tasks = data;
      });
  }

  /**
   * Event handler for completion of a specific task.
   * @param event
   */
  onTaskCompleted(event) {

    console.log(`Updating backend with updated task...`);

    // See app.component.html; the event(completed) is handled by this function(completeTask($event)).
    // What the event consists of,
    // is defined in the type parameter of the EventEmitter(task.component.ts).
    // In this case it is a task, so we are passing this event as a Task to the service.
    this.backend.deleteTask(event).subscribe((success: boolean) => {
      if (success) {
        console.log(`Deletion response: ${JSON.stringify(success, null, 2)}`);
        const position = this.tasks.indexOf(event);
        this.tasks.splice(position, 1);
      }
    });
  }

  /**
   *
   */
  createNewTask() {
    console.log(`Creating new task '${this.model.title}'...`);
    this.backend.createTask(this.model).subscribe((data: Task) => {
      if (data) {
        console.log(`Response from server: ${JSON.stringify(data, null, 2)}`);
        console.log(`Task '${this.model.title}' was created successfully.`);
        this.tasks.push(data);
      }
    });
  }
}
