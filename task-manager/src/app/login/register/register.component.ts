import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { createCounterRangeValidator } from '../../validate/validate';
import { User } from '../../domain/user.domain';
import { debounceTime, filter } from 'rxjs/operators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  user: User = new User();
  avatars = ['man', 'lily', 'sugar', 'jenny', 'boy']

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(
      {
        username: [''],
        passwordGroup: this.fb.group({
          password: [''],
          confirmpassword: ['']
        }),
        birthDay: [''],
        avatar: [''],
        identity: ['']
        // counter: [4, createCounterRangeValidator(2, 8)]
      }
    )

    const id$ = this.form.get('identity').valueChanges
      .pipe(
        debounceTime(300),
        filter(_ => this.form.get('identity').valid)
      );

    id$.subscribe(x => console.log('haha:'+x));
  }

  register(value: any) {
    this.user = value;
    this.user.password = value.passwordGroup.password;
    console.log(this.user);
  }
}
