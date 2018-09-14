import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../domain/user.domain';

describe('AuthService Test', () => {
  let loginService: LoginService;
  let userServiceSpy: jasmine.SpyObj<UserService>;

   beforeEach(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
      const spy = jasmine.createSpyObj('UserService', ['login']);

      TestBed.configureTestingModule({
        providers: [
          LoginService,
          { provide: Router,      useValue: routerSpy },
          { provide: UserService, useValue: spy }
        ]
      });
      loginService = TestBed.get(LoginService);
      userServiceSpy = TestBed.get(UserService);
   });

   it('login test', () => {
      const returnUser: User = {
        id: 1,
        username: 'fred',
      };
      userServiceSpy.login.and.returnValue(of(returnUser));

      const user = {
        username: 'fred',
        password: '123123'
      };
      loginService.login(user).subscribe(
        u => expect(u).toBe(returnUser, 'service returned stub value')
      );
   });
});
