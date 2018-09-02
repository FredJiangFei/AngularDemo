import { Component, OnInit, Output, Input, HostBinding, HostListener, EventEmitter } from '@angular/core';
import { Product } from '../../domain/product.domain';
import { cardAnim } from '../../animates/card.animate';
import { itemAnim } from '../../animates/list.animate';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  animations: [
    cardAnim,
    itemAnim
  ]
})
export class ProductItemComponent implements OnInit {

  @Input()
  public item: Product;

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<Product>();

  @HostBinding('@card') cardState = 'out';
  @HostBinding('@itemAnim') itemAnim;

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

  showDeleteModal(e: Event) {
    e.stopPropagation();
    this.delete.emit(this.item.id);
  }

  showEditModal(e: Event) {
    e.stopPropagation();
    this.edit.emit(this.item);
  }
}
