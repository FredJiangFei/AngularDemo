import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
