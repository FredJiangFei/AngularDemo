import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';
import { slideToRight } from '../../animates/route.animate';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { ProductService } from '../../service/product.service.';
import { Observable } from 'rxjs';

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

  products: Observable<Product>;
  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    // this.products = [
    //   new Product(1, 'iphone7', this.pic, 'this is apple iphon7'),
    //   new Product(2, 'vivo r11', this.pic, 'this is vivo r11')
    // ]
    this.loadProducts();
  }

  loadProducts(){
    this.products = this.productService.getAll();
  }

  openAddProductModal() {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        // width: '500px',
        // height: '300px',
        // position: { left: '0', top: '0' },
        data: 'this is a product create dialog!'
      });

    dialogRef.afterClosed().subscribe((result: Product) => {
      this.productService.add(result).subscribe(x => this.loadProducts());
      // this.products = [...this.products, new Product(3, 'huawei', this.pic, 'huawei phone')]
    });
  }

  showDeleteModal(productId: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.loadProducts();
        // this.products = this.products.filter(x => x.id != productId);
      }
    });
  }
}
