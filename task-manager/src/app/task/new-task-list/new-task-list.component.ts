import { Component, OnInit, Inject } from '@angular/core';
import { TaskList } from '../../domain/task.domain';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent implements OnInit {

  choosedStatus: string;
  status = ['develop', 'test', 'done'];
  constructor(private dailogRef: MatDialogRef<NewTaskListComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { }

  taskList = new TaskList();
  title: string;

  ngOnInit() {
    this.title = this.data.title;
    if (this.data.taskList) {
      this.taskList = this.data.taskList;
    }
  }

  save() {
    this.dailogRef.close(this.taskList);
  }
}
