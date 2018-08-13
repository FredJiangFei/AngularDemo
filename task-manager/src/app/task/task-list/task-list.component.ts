import { Component, OnInit, Input } from '@angular/core';
import { Task, TaskList } from '../../domain/task.domain';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input()
  taskList: TaskList;

  constructor(private dialogRef: MatDialog) { }

  ngOnInit() {
  }

  addTask() {
    this.dialogRef.open(NewTaskComponent);
  }

}
