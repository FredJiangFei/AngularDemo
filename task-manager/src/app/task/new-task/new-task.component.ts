import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  title: string;
  prority = ['emergency', 'important', 'normal']
  constructor(@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
    console.log(this.data.task);
  }

}
