import { Component, OnInit, Inject } from '@angular/core';
import { TaskList } from '../../domain/task.domain';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.css']
})
export class NewTaskListComponent implements OnInit {

  choosedStatus:string;
  status = ['develop', 'test', 'done'];
  constructor(private dailogRef: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
  }

  save(){
    let taskList = new TaskList();
    taskList.status = this.choosedStatus;
    this.dailogRef.close(taskList);
  }

}
