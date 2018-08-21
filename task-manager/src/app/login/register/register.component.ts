import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { createCounterRangeValidator } from '../../validate/validate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  avatars = ['man', 'lily', 'sugar', 'jenny', 'boy']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        username:[''],
        passwordGroup: this.fb.group({
          password:[''],
          confirmpassword:['']
        })

        // avatar: ['1'],
        // counter: [4, createCounterRangeValidator(2, 8)]
      }
    )
  }

  register(value: any) {
    console.log(value);
  }

}
