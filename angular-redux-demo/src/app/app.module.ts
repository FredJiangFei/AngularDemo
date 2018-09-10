import { todoFilterReducer } from './reducers/todo.filter.reducer';
import { todoReducer } from './reducers/todo.reducer';
import { ItemService } from './services/item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(
      {
        todos: todoReducer,
        todoFilter: todoFilterReducer
      }
    ),
    StoreDevtoolsModule.instrument()
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
