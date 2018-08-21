import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Task } from '../../domain/task.domain';
import { User } from '../../domain/user.domain';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string;
  task: Task;
  prority = ['emergency', 'important', 'normal']
  constructor(@Inject(MAT_DIALOG_DATA) private data,
    private matDialogRef: MatDialogRef<NewTaskComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
    this.task = new Task();
    console.log(this.data.task);
  }

  save() {
    this.task.assigned = new User('lily','lily');
    this.matDialogRef.close(this.task);
  }
}
