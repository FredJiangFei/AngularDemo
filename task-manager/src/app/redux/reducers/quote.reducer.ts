import * as quoteAction from '../actions/quote.action';
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

export function reducer(state = initialState, action: { type: string; payload: any }): State {
    switch (action.type) {
        case quoteAction.QUOTE_SUCCESS: {
            return { ...state, quote: action.payload };
        }

        case quoteAction.QUOTE_FAIL:
        default: {
            return state;
        }
    }
}
