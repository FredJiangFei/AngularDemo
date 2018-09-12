import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { createCounterRangeValidator } from '../../validate/validate';
import { User } from '../../domain/user.domain';
import { debounceTime, filter } from 'rxjs/operators';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RegisterAction } from '../../redux/actions/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  avatars = ['man', 'lily', 'sugar', 'jenny', 'boy'];

  constructor(private fb: FormBuilder,
  private userService: UserService,
  private route: Router,
  private store$: Store<any>) { }

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
    );

    const id$ = this.form.get('identity').valueChanges
      .pipe(
        debounceTime(300),
        filter(_ => this.form.get('identity').valid)
      );

    id$.subscribe(x => console.log('haha:' + x));
  }

  register(value: any) {
    const user = {
      username: value.username,
      password: value.passwordGroup.password
    };
    this.store$.dispatch(new RegisterAction(user));
  }
}
