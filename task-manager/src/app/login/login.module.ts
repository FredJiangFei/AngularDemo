import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
import { AgeInputComponent } from './age-input/age-input.component';

@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, AgeInputComponent]
})
export class LoginModule { }
