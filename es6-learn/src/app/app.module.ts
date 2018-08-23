import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestructureComponent } from './destructure/destructure.component';
import { StringExtensionComponent } from './string-extension/string-extension.component';

@NgModule({
  declarations: [
    AppComponent,
    DestructureComponent,
    StringExtensionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
