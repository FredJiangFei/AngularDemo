import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[app-drag]'
})
export class DragDirective {

  constructor(
    private el: ElementRef,
    private rd: Renderer2,
    private dragService: DragDropService) { }

  private _isDraggble = false;

  @Input('app-drag')
  set isDraggable(val: boolean) {
    this._isDraggble = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }

  get isDraggable() {
    return this._isDraggble;
  }

  @Input() draggedClass: string;
  @Input() dragData: any;

  @HostListener('dragstart', ['$event'])
  onDragStart(e: Event) {
    
    if (this.el.nativeElement == e.target) {
      this.dragService.setDragData(this.dragData);
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(e: Event) {
    if (this.el.nativeElement == e.target) { 
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
