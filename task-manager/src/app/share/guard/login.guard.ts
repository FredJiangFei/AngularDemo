import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../../service/login.service";

export class LoginGuard implements CanActivate {

    constructor(private loginService: LoginService,
        private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return new Observable((observer) => {
            if (this.loginService.isLogin) {
                return;
            }
            this.router.navigate(['/login']);
        });
    }
}