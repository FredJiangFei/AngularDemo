import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product.domain';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor() { }

  ngOnInit() {
    let pic = "../../../assets/imgs/pexels-photo-1310181.jpeg"
    this.products = [
      new Product('iphone7', pic, 'this is apple iphon7'),
      new Product('vivo r11', pic, 'this is vivo r11')
    ]
  }
}
