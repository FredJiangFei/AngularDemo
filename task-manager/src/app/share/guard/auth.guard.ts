import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../../service/login.service";

@Injectable()
export class AuthGurd implements CanActivate {

    constructor(
        private loginService: LoginService,
        private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.loginService.isLogin) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
}