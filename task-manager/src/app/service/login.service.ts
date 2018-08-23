
import { Injectable, Inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../domain/user.domain';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    constructor(private userService: UserService,
    private router: Router) { }

    isLogin: boolean;

    login(user: User) {
        this.userService.getByName(user.name)
            .subscribe(x => {
                if (x.password == user.password) {
                    this.isLogin = true;
                }
                this.router.navigate(['/']);
            });
    }

    logout() {
       this.isLogin =false;
    }
}
