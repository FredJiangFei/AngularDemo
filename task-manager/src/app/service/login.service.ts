
import { Injectable, Inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../domain/user.domain';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

    constructor(private userService: UserService,
    private router: Router) { }

    isLogin: boolean;

    login(user: User) {
     return  this.userService.getByName(user.name).pipe(
        tap(x => {
            if (x[0].password == user.password) {
                this.isLogin = true;
            }
        })
     );
    }

    logout() {
       this.isLogin =false;
    }
}
