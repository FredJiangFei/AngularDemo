import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';
import { MouseComponent } from './mouse/mouse.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDragComponent,
    SimpleTestComponent,
    MouseComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
