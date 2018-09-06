import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDragComponent } from './simple-drag/simple-drag.component';
import { SimpleTestComponent } from './simple-test/simple-test.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDragComponent,
    SimpleTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
