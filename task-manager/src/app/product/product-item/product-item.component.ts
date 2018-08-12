import { Component, OnInit, Output, Input } from '@angular/core';
import { Product } from '../../domain/product.domain';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input()
  public item: Product;

  constructor() { }

  ngOnInit() {
    
  }
}
