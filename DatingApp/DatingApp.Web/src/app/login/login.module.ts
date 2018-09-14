import { CoreModule } from './../core/core.module';
import { PopupComponent } from './../share/popup/popup.component';
import { NgModule, Injector } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    ShareModule,
    CoreModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {

}
