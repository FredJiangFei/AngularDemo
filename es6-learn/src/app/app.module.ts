import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DestructureComponent } from './destructure/destructure.component';
import { StringExtensionComponent } from './string-extension/string-extension.component';
import { RegexpComponent } from './regexp/regexp.component';
import { NumberComponent } from './number/number.component';
import { FuncComponent } from './func/func.component';

@NgModule({
  declarations: [
    AppComponent,
    DestructureComponent,
    StringExtensionComponent,
    RegexpComponent,
    NumberComponent,
    FuncComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
