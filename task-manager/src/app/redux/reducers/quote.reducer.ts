import * as actions from '../actions/quote.action';
import { Quote } from '../../domain/quote.domain';

export interface State {
    quote: Quote;
}

export const initialState: State = {
    quote: {
        id: 1,
        title: 'Helllo world',
        desc: 'This is login page for task manager.'
    }
};

export function reducer(state = initialState, action: actions.Actions): State {
    switch (action.type) {
        case actions.ActionTypes.LOAD_SUCCESS: {
            return { ...state, quote: action.payload };
        }

        case actions.ActionTypes.LOAD_FAIL:
        default: {
            return state;
        }
    }
}
