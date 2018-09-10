import { ShowAll, ShowActive, ShowComplete } from './../actions/todo.filter.actions';
import { AddTodo, RemoveTodo, ToggleTodo } from './../actions/todo.actions';
import { Item } from './../models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Observable, combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Observable<Item[]>;
  ids = [1, 2, 3, 4, 5];

  constructor(private store$: Store<Item>) { }

  ngOnInit() {
     const data$ = this.store$.pipe(select('todos'), startWith([]));
     const filterData$ = this.store$.pipe(select('todoFilter'));
     this.items = combineLatest(data$, filterData$,
      (todos: Item[], filter: any) => todos.filter(filter));
  }



  addTodo() {
    const todoToAdd = {
      id: this.ids[0],
      name: 'item ' + this.ids[0],
      description: 'This is description'
    };
    this.store$.dispatch(new AddTodo(todoToAdd));
    const curId = this.ids[0];
    this.ids = this.ids.filter(id => id !== curId);
  }

  removeTodo(item: Item) {
    this.store$.dispatch(new RemoveTodo(item));
  }

  toggleTodo(item: Item) {
    this.store$.dispatch(new ToggleTodo(item));
  }

  all() {
    this.store$.dispatch(new ShowAll());
  }

  completed() {
    this.store$.dispatch(new ShowComplete());
  }

  actived() {
    this.store$.dispatch(new ShowActive());
  }
}
