import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { LoginService } from '../../service/login.service';
import { AuthActionTypes, LoginSuccessAction,
  LoginFailAction, RegisterSuccessAction, RegisterFailAction, LoginAction, RegisterAction } from '../actions/auth.actions';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private userService: UserService,
    private activedRoute: ActivatedRoute,
    private router: Router) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((model: LoginAction) => this.loginService.login(model.payload).pipe(
      map(auth => {
        if (this.loginService.loggedIn()) {
          const returnUrl = this.activedRoute.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }
        return new LoginSuccessAction(auth);
      }),
      catchError(err => of(new LoginFailAction(JSON.stringify(err)))))
    )
  );

  @Effect()
  register$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.REGISTER),
    switchMap((model: RegisterAction) => this.userService.register(model.payload).pipe(
      map(auth => {
        this.router.navigate(['\login']);
        return new RegisterSuccessAction(auth);
      },
      catchError(err => of(new RegisterFailAction(JSON.stringify(err)))))
    )
  ));

  @Effect()
  logout$: Observable<Action> = this.actions$
  .ofType(AuthActionTypes.LOGOUT)
  .pipe(
     tap(_ => {
      this.loginService.logout();
     })
  );
}
