// npm i --save @ngrx/core @ngrx/store @ngrx/router-store @ngrx/effects @ngrx/store-devtools ngrx-store-freeze
import { NgModule } from '@angular/core';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromQuote from './quote.reducer';
import { compose } from '@ngrx/core';
import { environment } from '../../../environments/environment.prod';

export interface State {
    quote: fromQuote.State;
}

const initialState: State = {
    quote: fromQuote.initialState
};

const reducers = {
    quote: fromQuote.reducer,
};

const productionReducers: ActionReducer<State> = combineReducers(reducers);
// const developmentReducers: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state = initialState, action: any): State {
    // if (environment.production) {
        return productionReducers(state, action);
    // }
    // return developmentReducers(state, action);
}

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(reducer),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ]
})
export class AppStoreModule { }
