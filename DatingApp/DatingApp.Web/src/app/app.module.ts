import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ProductModule } from './product/product.module';
import { TaskModule } from './task/task.module';
import { RolesComponent } from './admin/roles/roles.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent
  ],
  imports: [
    ShareModule,
    CoreModule,
    LoginModule,
    ProductModule,
    AdminModule,
    TaskModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }
}
