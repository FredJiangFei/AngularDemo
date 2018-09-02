import { Injectable, Inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../domain/user.domain';
import { Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginService {
  public loginUser: any;
  jwtService = new JwtHelperService();

  constructor(
    private userService: UserService,
    private router: Router) {}

  login(user: any) {
    return this.userService.login(user).pipe(
      map((repsonse: any) => {
        const res = repsonse;
        if (res) {
          this.loginUser = this.jwtService.decodeToken(res.token);
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  loggedIn () {
    const token = localStorage.getItem('token');
    return !  this.jwtService.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
