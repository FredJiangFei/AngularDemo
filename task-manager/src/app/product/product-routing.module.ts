import { AuthGurd } from './../share/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: 'products', component: ProductListComponent,canActivate:[AuthGurd] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
