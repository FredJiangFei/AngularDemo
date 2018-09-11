
import { Action } from '@ngrx/store';
import { Quote } from '../../domain/quote.domain';

export enum QuoteActionTypes {
    LOAD = '[Quote] Load',
    LOAD_SUCCESS = '[Quote] Success',
    LOAD_FAIL = '[Quote] Fail'
}

export class LoadAction implements Action {
    readonly type = QuoteActionTypes.LOAD;

    constructor(public payload: null) { }
}

export class LoadSuccessAction implements Action {
    readonly type = QuoteActionTypes.LOAD_SUCCESS;

    constructor(public payload: Quote) { }
}

export class LoadFailAction implements Action {
    readonly type = QuoteActionTypes.LOAD_FAIL;

    constructor(public payload: string) { }
}

export type QuoteActions  = LoadAction | LoadSuccessAction | LoadFailAction;
