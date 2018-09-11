import { Quote } from '../../domain/quote.domain';
import { QuoteActions, QuoteActionTypes } from '../actions/quote.action';


export const initialState: Quote = {
    id: 1,
    title: 'Helllo world',
    desc: 'This is login page for task manager.'
};

export function quoteReducer(state = initialState, action: QuoteActions): Quote {
    switch (action.type) {
        case QuoteActionTypes.LOAD_SUCCESS: {
            return action.payload;
        }
        case QuoteActionTypes.LOAD_FAIL:
        default: {
            return state;
        }
    }
}

