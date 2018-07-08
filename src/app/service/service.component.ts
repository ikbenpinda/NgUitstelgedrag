import {Component, Injectable, OnInit} from '@angular/core';
import {Task} from '../task/task.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.dev';

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
    return this.http.get(`${environment.api_base_url}/${environment.api_route_tasks}`);
  }

  /**
   *
   * @param {Task} task
   * @return {Subscription}
   */
  deleteTask(task: Task) {
    console.warn(`serviceComponent.deleteTask: task = ${JSON.stringify(task, null, 2)}`);
    console.warn(`serviceComponent.deleteTask: task.id setter = ${task.id}`);
    return this.http.delete(`${environment.api_base_url}/${environment.api_route_tasks}/${task.id}`);
  }

  /**
   *
   * @param {Task} task
   */
  createTask(task: Task) {
    console.log(`Adding new task: ${JSON.stringify(task)}`);
    return this.http.post(`${environment.api_base_url}/${environment.api_route_tasks}`, task);
  }
}
