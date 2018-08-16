import { MoveTaskComponent } from './../move-task/move-task.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';
import { slideToRight } from '../../animates/route.animate';
import { DragData } from '../../directive/drag-drop.service';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css'],
  animations: [
    slideToRight
  ]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  assignedUser = new User('lily', 'lily');

  taskLists = [];
  constructor(private dialogRef: MatDialog) { }

  ngOnInit() {
    this.taskLists = [
      new TaskList([
        new Task(1, 'T1', 'this is t1', this.assignedUser),
        new Task(2, 'T1', 'this is t1', this.assignedUser),
        new Task(3, 'T1', 'this is t1', this.assignedUser),
        new Task(4, 'T1', 'this is t1', this.assignedUser),
      ], 'Ready'),
      new TaskList([
        new Task(5, 'T2', 'this is t2', this.assignedUser),
        new Task(6, 'T2', 'this is t2', this.assignedUser),
        new Task(7, 'T2', 'this is t2', this.assignedUser)
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

  addDataToList(data: DragData, taskList: TaskList) {
    console.log(data.data);
    taskList.tasks = [...taskList.tasks, new Task(8, 'T1', 'this is t1', this.assignedUser)];
  }
}
