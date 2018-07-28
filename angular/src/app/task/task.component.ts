import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from './task.model';
import {ServiceComponent} from '../service/service.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  @Output() completed = new EventEmitter<Task>();

  constructor(private backend: ServiceComponent) {
  }

  ngOnInit() {
  }

  /**
   *
   * @param {Task} task
   */
  deleteTask() {
    this.backend.deleteTask(this.task).subscribe((data) => {
      console.log(`Response from server: ${JSON.stringify(data)}`);
    });
  }

  /**
   * Marks this task as completed and emits it as an event.
   */
  complete() {
    console.log(`Marking task '${this.task.title}' as completed.`);
    this.task.isCompleted = true;
    this.completed.emit(this.task);
  }
}
