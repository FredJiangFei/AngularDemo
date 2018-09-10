import { TodoFilterAction, TodoFilterActionTypes } from './../actions/todo.filter.actions';
import { Item } from '../models/item';

export const todoFilterReducer = (state = (todo: Item) => todo, action: TodoFilterAction) => {
    switch (action.type) {
      case TodoFilterActionTypes.SHOW_ALL:
        return todo => todo;
      case TodoFilterActionTypes.SHOW_ACTIVE:
        return todo => !todo.completed;
      case TodoFilterActionTypes.SHOW_COMPLETED:
        return todo => todo.completed;
      default:
        return state;
    }
  };
