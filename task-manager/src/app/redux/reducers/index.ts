// npm i --save @ngrx/core @ngrx/store @ngrx/router-store @ngrx/effects @ngrx/store-devtools ngrx-store-freeze
import { NgModule } from '@angular/core';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core';
import { environment } from '../../../environments/environment.prod';
import { quoteReducer } from './quote.reducer';

const reducers = {
    quote: quoteReducer,
};

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forRoot(reducers),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument(),
    ]
})
export class AppStoreModule { }
