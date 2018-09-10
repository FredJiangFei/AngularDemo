import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getAll();
  }
}
