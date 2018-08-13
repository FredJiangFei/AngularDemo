import { TaskList } from './../../domain/task.domain';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-move-task',
  templateUrl: './move-task.component.html',
  styleUrls: ['./move-task.component.css']
})
export class MoveTaskComponent implements OnInit {

  taskLists: any[];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data, 
    private dialogRef: MatDialogRef<MoveTaskComponent>) { }

  ngOnInit() {
    this.taskLists = this.data.taskLists;
  }

}
