import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';
import { slideToRight } from '../../animates/route.animate';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { ProductService } from '../../service/product.service.';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    slideToRight
  ]
})
export class ProductListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  products: Array<Product>;
  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(products => this.products = products);
  }

  openAddProductModal() {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        // width: '500px',
        // height: '300px',
        // position: { left: '0', top: '0' },
        data: {
          product: new Product()
        }
      });

    dialogRef.afterClosed().subscribe((result: Product) => {
      if(!result.id){
        this.productService.add(result).subscribe(x => this.products = [...this.products, result]);
      }else{
        this.productService.update(result).subscribe(x => this.loadProducts());
      }
    });
  }

  showEditModal(product: Product) {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        data: {
          product: product
        }
      });
  }

  showDeleteModal(productId: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.delete(productId).subscribe(x => {
          this.products = this.products.filter(x => x.id != productId);
        });
      }
    });
  }
}
