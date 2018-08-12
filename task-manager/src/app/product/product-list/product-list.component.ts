import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    let pic = "../../../assets/imgs/pexels-photo-1310181.jpeg"
    this.products = [
      new Product('iphone7', pic, 'this is apple iphon7'),
      new Product('vivo r11', pic, 'this is vivo r11')
    ]
  }

  openAddProductModal() {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        width: '500px',
        height: '300px',
        position: { left: '0', top: '0' },
        data: 'this is a product create dialog!'
      });

    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
