import { Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Message } from '../../domain/message';
import { UserService } from '../../service/user.service';
import { LoginService } from '../../service/login.service';

@Injectable()
export class MessagesResolver implements Resolve<Message[]> {
    pageNumber = 1;
    pageSize = 5;
    messageContainer = 'Unread';

    constructor(
        private userService: UserService,
        private router: Router,
        private authService: LoginService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Message[]> {
        return this.userService.getMessages(
              this.authService.decodedToken.nameid,
              this.pageNumber,
              this.pageSize,
              this.messageContainer).pipe(
            catchError(error => {
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
