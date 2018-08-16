import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { DragDropService, DragData } from './drag-drop.service';
// import { take } from 'rxjs/add/operator/take'

@Directive({
  selector: '[app-drop]'
})
export class DropDirective {

  @Input() dragEnterClass:string;
  @Output() dropped = new EventEmitter<DragData>();

  private data$;

  constructor(
    private el: ElementRef, 
    private rd: Renderer2,
    private dragService: DragDropService
  ) { 
      this.data$ = dragService.getDragData();//.take(1);
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement == e.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement == e.target) {

    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement == e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (this.el.nativeElement == e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);

      this.dropped.emit(this.data$);
      this.dragService.clearDragData();
    }
  }
}
