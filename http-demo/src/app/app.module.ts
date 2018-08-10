import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { HttpModule } from '@angular/http';
import { WebSocketComponent } from './web-socket/web-socket.component'
import { WebSocketService } from './shared/web-socket.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products/:id', component: ProductComponent },
  { path: 'products', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WebSocketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebSocketService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
