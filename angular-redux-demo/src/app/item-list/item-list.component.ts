import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;
  constructor(
    private itemService: ItemService,
    private store$: Store<Item>) { }

  ngOnInit() {
     this.items = this.store$.pipe(select('todos'));
  }

  addTodo(desc: string) {
    const todoToAdd = {
      id: 1,
      name: 'item 1',
      description: 'This is description'
    };
    this.store$.dispatch({type: 'ADD_TODO', payload: todoToAdd});
  }
}
