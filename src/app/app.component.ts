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
  tasks: Task[] = [];

  constructor(private backend: ServiceComponent) {
    this.getAllTasks();
  }

  getAllTasks() {
    // Because the observable is initially empty, we subscribe for changes(incoming data).
    this.backend.getAllTasks()
      .subscribe((data: Task[]) => { // fixme - is this the right place for subscribe?
        console.log(`Response from server: ${JSON.stringify(data)}`);
        this.tasks = data;
      });
  }
}
