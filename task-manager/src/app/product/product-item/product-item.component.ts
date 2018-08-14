import { Component, OnInit, Output, Input, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { cardAmin } from '../../animates/card.animate';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  animations: [cardAmin]
})
export class ProductItemComponent implements OnInit {

  @Input()
  public item: Product;

  @Output()
  delete = new EventEmitter<number>();

  @HostBinding('@card') cardState = 'out';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

  constructor() { }

  ngOnInit() {

  }

  showDeleteModal() {
    this.delete.emit(this.item.id);
  }
}
