import {Component, Injectable, OnInit} from '@angular/core';
import {Task} from '../task/task.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
@Injectable() // to define a class as a service and let the DI know how to inject it.
export class ServiceComponent implements OnInit {

  // This lets the DI inject the HttpClient, so no additional setup is needed.
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /**
   *
   * @return {Observable<Object>}
   */
  getAllTasks() {
    // get from backend over http - this returns an observable immediately.
    return this.http.get('//localhost:3000/tasks');
  }

  /**
   *
   * @param {Task} task
   * @return {Subscription}
   */
  deleteTask(task: Task) {
    console.warn(`serviceComponent.deleteTask: task = ${JSON.stringify(task, null, 2)}`);
    console.warn(`serviceComponent.deleteTask: task.id setter = ${task.id}`);
    return this.http.delete(`//localhost:3000/tasks/${task.id}`);
  }
}
