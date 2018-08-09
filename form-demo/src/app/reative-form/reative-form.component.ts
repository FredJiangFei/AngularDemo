import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl("123@qq.com"),
      new FormControl("456@qq.com"),
      new FormControl("789@qq.com")
    ])
  });

  username: FormControl = new FormControl('aaaa');

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.formModel.value);
  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
