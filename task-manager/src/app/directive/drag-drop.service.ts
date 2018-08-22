import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DragDropService {

  private _dragData = new BehaviorSubject<any>(null);

  setDragData(data: any) {
    this._dragData.next(data);
  }

  getDragData(): Observable<any> {
    return this._dragData.asObservable();
  }

  clearDragData() {
    this._dragData.next(null)
  }

  constructor() { }
}
