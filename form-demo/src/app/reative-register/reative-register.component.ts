import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { mobileValidator, passwordEqualValidator } from './register.validates';

@Component({
  selector: 'app-reative-register',
  templateUrl: './reative-register.component.html',
  styleUrls: ['./reative-register.component.css']
})
export class ReativeRegisterComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordGroup: fb.group({
        password: ['',Validators.minLength(6)],
        confirm: ['']
      }, {
          validator: passwordEqualValidator
        })
    });
  }

  register() {
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
