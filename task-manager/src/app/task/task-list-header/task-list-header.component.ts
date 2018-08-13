import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from '../../domain/task.domain';

@Component({
  selector: 'app-task-list-header',
  templateUrl: './task-list-header.component.html',
  styleUrls: ['./task-list-header.component.css']
})
export class TaskListHeaderComponent implements OnInit {

  @Input()
  taskList: TaskList;

  constructor() { }

  ngOnInit() {
  }

}
