import { Injectable, Inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../domain/user.domain';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  constructor(private userService: UserService, private router: Router) {}

  login(user: User) {
    return this.userService.login(user).pipe(
      tap(x => {
        // if (x[0].password == user.password) {
        //     this.isLogin = true;
        // }
      }),
      map((repsonse: any) => {
        const res = repsonse;
        if (res) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  loggedIn () {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
