import { ErrorInterceptorProvider } from './error.interceptor';
import { AuthGurd } from '../share/guard/auth.guard';
import { QuoteService } from './quote.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { TaskService } from './task.service';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { MemberDetailResolver } from '../share/resolvers/member-detail.resolver';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    QuoteService,
    ProductService,
    TaskService,
    UserService,
    LoginService,
    AuthGurd,
    ErrorInterceptorProvider,
    MemberDetailResolver]
})
export class ServiceModule { }
