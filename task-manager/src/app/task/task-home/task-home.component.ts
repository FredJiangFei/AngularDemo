import { MoveTaskComponent } from './../move-task/move-task.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';
import { slideToRight } from '../../animates/route.animate';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css'],
  animations:[
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  taskLists = [];
  constructor(private dialogRef: MatDialog) { }

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

  openAddModal() {
    this.dialogRef.open(NewTaskComponent, { data: { title: 'Create task' } });
  }

  openEditModal(task) {
    this.dialogRef.open(NewTaskComponent, { data: { title: 'Edit task', task: task } });
  }

  moveTaskTo() {
    this.dialogRef.open(MoveTaskComponent, { data: { taskLists: this.taskLists } });
  }
}
