import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductRoutingModule } from './product-routing.module';
import { ShareModule } from '../share/share.module';
import { NewProductComponent } from './new-product/new-product.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '../../../node_modules/@angular/material';

@NgModule({
  imports: [
    ShareModule,
    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductItemComponent, NewProductComponent],
  entryComponents: [NewProductComponent]
})
export class ProductModule { }
