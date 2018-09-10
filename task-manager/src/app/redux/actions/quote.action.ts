
import { Action } from '@ngrx/store';
import { Quote } from '../../domain/quote.domain';
export enum ActionTypes {
    LOAD = '[Quote] Load',
    LOAD_SUCCESS = '[Quote] Success',
    LOAD_FAIL = '[Quote] Fail'
}

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;

    constructor(public payload: null) { }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: Quote) { }
}

export class LoadFailAction implements Action {
    readonly type = ActionTypes.LOAD_FAIL;

    constructor(public payload: string) { }
}

export type Actions  = LoadAction | LoadSuccessAction | LoadFailAction;


export const QUOTE = 'Quote';
export const QUOTE_SUCCESS = 'Quote Success';
export const QUOTE_FAIL = 'Quote Fail';
