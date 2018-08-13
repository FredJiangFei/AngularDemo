import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../../domain/task.domain';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent implements OnInit {

  @Input()
  taskList: TaskList;

  @Output()
  addTask = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  showAddTaskModal(){
    this.addTask.emit();
  }

}
