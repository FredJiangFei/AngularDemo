import { ErrorInterceptorProvider } from './error.interceptor';
import { AuthGurd } from '../share/guard/auth.guard';
import { QuoteService } from './quote.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { TaskService } from './task.service';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { UnsavedGuard } from '../share/guard/unsave.guard';
import { AdminService } from './admin.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    QuoteService,
    ProductService,
    TaskService,
    UserService,
    LoginService,
    AuthGurd,
    ErrorInterceptorProvider,
    UnsavedGuard,
    AdminService
  ]
})
export class ServiceModule { }
