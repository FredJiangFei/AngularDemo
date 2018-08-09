import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent implements OnInit {

  username: FormControl = new FormControl('aaaa');

  formDate: FormGroup = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  });

  emails: FormArray = new FormArray([
    new FormControl("123@qq.com"),
    new FormControl("456@qq.com"),
    new FormControl("789@qq.com")
  ]);


  constructor() { }

  ngOnInit() {
  }

}
