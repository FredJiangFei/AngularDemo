import { QuoteService } from './quote.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service.';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [QuoteService, ProductService,TaskService]
})
export class ServiceModule { }
