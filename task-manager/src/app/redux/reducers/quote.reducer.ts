import { Quote } from '../../domain/quote.domain';
import { Actions, ActionTypes } from '../actions/quote.action';

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

export function reducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.LOAD_SUCCESS: {
            return { ...state, quote: action.payload };
        }
        case ActionTypes.LOAD_FAIL:
        default: {
            return state;
        }
    }
}

export const getQuote = (state: State) => state.quote;
