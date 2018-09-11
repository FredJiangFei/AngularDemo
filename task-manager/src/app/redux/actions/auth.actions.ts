
import { Action } from '@ngrx/store';
import { User } from '../../domain/user.domain';

export enum AuthActionTypes {
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login_Success',
    LOGIN_FAIL = '[Auth] Login_Fail',
    REGISTER = '[Auth] Register',
    REGISTER_SUCCESS = '[Auth] Register_Success',
    REGISTER_FAIL = '[Auth] Register_Fail',
    LOGOUT = '[Auth] Logout'
}

export class LoginAction implements Action {
    readonly type = AuthActionTypes.LOGIN;

    constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
    readonly type = AuthActionTypes.LOGIN_SUCCESS;

    constructor(public payload: any) { }
}

export class LoginFailAction implements Action {
    readonly type = AuthActionTypes.LOGIN_FAIL;

    constructor(public payload: string) { }
}

export class RegisterAction implements Action {
    readonly type = AuthActionTypes.REGISTER;

    constructor(public payload: User) { }
}

export class RegisterSuccessAction implements Action {
    readonly type = AuthActionTypes.REGISTER_SUCCESS;

    constructor(public payload: User) { }
}

export class RegisterFailAction implements Action {
    readonly type = AuthActionTypes.REGISTER_FAIL;

    constructor(public payload: string) { }
}

export class LogoutAction implements Action {
    readonly type = AuthActionTypes.LOGOUT;
}

export type AuthActions  = LoginAction | LoginSuccessAction | LoginFailAction
    | RegisterAction | RegisterSuccessAction | RegisterFailAction | LogoutAction;
