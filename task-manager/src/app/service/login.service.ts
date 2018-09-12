import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../domain/user.domain';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {
  public decodedToken: any;
  public currentUser: User;
  jwtService = new JwtHelperService();

  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

  constructor(
    private userService: UserService,
    private router: Router) {}

  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

  login(model: any) {
    return this.userService.login(model).pipe(
      map((repsonse: any) => {
        const user = repsonse;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtService.decodeToken(user.token);

          localStorage.setItem('user', JSON.stringify(user.user));
          this.currentUser = user.user;

          this.changeMemberPhoto(this.currentUser.photoUrl);
        }
      })
    );
  }

  loggedIn () {
    const token = localStorage.getItem('token');
    return !  this.jwtService.isTokenExpired(token);
  }

  isAdmin () {
    const token = localStorage.getItem('token');
    const user = this.jwtService.decodeToken(token);
    return user.role && user.role.includes('Admin');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getValue() {
    return '123';
  }
}
