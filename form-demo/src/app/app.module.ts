import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReativeFormComponent } from './reative-form/reative-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ReativeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
