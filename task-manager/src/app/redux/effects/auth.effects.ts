import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { QuoteActionTypes, LoadSuccessAction, LoadFailAction } from '../actions/quote.actions';
import { QuoteService } from '../../service/quote.service';
import { LoginService } from '../../service/login.service';
import { AuthActionTypes, LoginSuccessAction, LoginFailAction, RegisterSuccessAction, RegisterFailAction } from '../actions/auth.actions';
import { UserService } from '../../service/user.service';
import {  } from '@ngrx/router-store';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router) {}

  @Effect()
  login$: Observable<Action> = this.actions$
  .ofType(AuthActionTypes.LOGIN)
  .pipe(
    switchMap(model => this.loginService.login(model).pipe(
      map(auth => new LoginSuccessAction(auth)),
      catchError(err => of(new LoginFailAction(JSON.stringify(err)))))
    )
  );

  @Effect()
  register$: Observable<Action> = this.actions$
  .ofType(AuthActionTypes.REGISTER)
  .pipe(
    switchMap(model => this.userService.register(model).pipe(
      map(auth => new RegisterSuccessAction(auth)),
      catchError(err => of(new RegisterFailAction(JSON.stringify(err)))))
    )
  );

  @Effect()
  logout$: Observable<Action> = this.actions$
  .ofType(AuthActionTypes.LOGOUT)
  .pipe(
   map(_ => this.router.navigate['/login'])
  );
}
