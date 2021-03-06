import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { MatDialog } from '@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';
import { slideToRight } from '../../animates/route.animate';
import { ProductService } from '../../service/product.service';
import { DelModalComponent } from '../../share/del-modal/del-modal.component';

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
      this.productService.add(result).subscribe(_ => this.products = [...this.products, result]);
    });
  }

  showEditModal(product: Product) {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        data: {
          product: Object.assign({}, product)
        }
      });
      dialogRef.afterClosed().subscribe((result: Product) => {
        this.productService.update(result).subscribe(_ =>
          Object.assign(this.products, this.products.map(x => x.id === result.id ? result : x))
        );
      });
  }

  showDeleteModal(productId: number) {
    const dialogRef = this.dialog.open(DelModalComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.delete(productId).subscribe(x => {
          this.products = this.products.filter((product: Product) => product.id !== productId);
        });
      }
    });
  }
}
