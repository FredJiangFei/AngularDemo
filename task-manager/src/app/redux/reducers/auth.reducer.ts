import { User } from '../../domain/user.domain';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';


export const initialState: any = {
};

export function authReducer(state = initialState, action: AuthActions): User {
    switch (action.type) {
        case AuthActionTypes.REGISTER_SUCCESS:
        case AuthActionTypes.LOGIN_SUCCESS:
        {
            return { ... action.payload };
        }
        case AuthActionTypes.REGISTER_FAIL:
        case AuthActionTypes.LOGIN_FAIL:
        {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

