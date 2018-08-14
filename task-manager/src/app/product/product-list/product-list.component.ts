import { Component, OnInit, HostBinding } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { NewProductComponent } from '../new-product/new-product.component';
import { slideToRight } from '../../animates/route.animate';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { listAnim } from '../../animates/list.animate';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    slideToRight,
    listAnim
  ]
})
export class ProductListComponent implements OnInit {

  @HostBinding('@routeAnim') state;
  @HostBinding('@listAnim') listAnim;
  pic = "../../../assets/imgs/pexels-photo-1310181.jpeg";
  products: Product[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.products = [
      new Product(1, 'iphone7', this.pic, 'this is apple iphon7'),
      new Product(2, 'vivo r11', this.pic, 'this is vivo r11')
    ]
  }

  openAddProductModal() {
    const dialogRef = this.dialog.open(NewProductComponent,
      {
        // width: '500px',
        // height: '300px',
        // position: { left: '0', top: '0' },
        data: 'this is a product create dialog!'
      });

    dialogRef.afterClosed().subscribe(result => {
      this.products = [...this.products, new Product(3, 'huawei', this.pic, 'huawei phone')]
    });
  }

  showDeleteModal(productId: number) {
    const dialogRef = this.dialog.open(DeleteProductComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.products = this.products.filter(x => x.id != productId);
      }
    });
  }
}
