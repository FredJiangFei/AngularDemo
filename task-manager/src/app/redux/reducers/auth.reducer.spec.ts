import { authReducer, initialAuthState } from './auth.reducer';
import { AuthActionTypes, LoginSuccessAction } from '../actions/auth.actions';


describe('Test AuthReducer', () => {
    describe('Action undefined', () => {
        it('should create a default instance', async () => {
            const action = {} as any;
            const result = authReducer(undefined, action);
            expect(result).toEqual(initialAuthState);
        });
    });

    describe('Action login success', () => {
        it('should return success payload', async () => {
            const payload = 'Login success';
            const action = new LoginSuccessAction(payload);

            const result = authReducer(undefined, action);
            expect(result).toEqual(payload);
        });
    });
});

