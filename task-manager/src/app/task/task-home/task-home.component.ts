import { Component, OnInit } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  taskLists = [];
  constructor() { }

  ngOnInit() {
    let assignedUser = new User('lily', 'lily');
    this.taskLists = [
      new TaskList([
        new Task('T1', 'this is t1', assignedUser),
        new Task('T1', 'this is t1', assignedUser),
        new Task('T1', 'this is t1', assignedUser),
        new Task('T1', 'this is t1', assignedUser),
      ], 'Ready'),
      new TaskList([
        new Task('T2', 'this is t2', assignedUser),
        new Task('T2', 'this is t2', assignedUser),
        new Task('T2', 'this is t2', assignedUser)
      ], 'Developing')
    ];
  }

}
