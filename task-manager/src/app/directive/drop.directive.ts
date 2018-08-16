import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';
import { DragDropService } from './drag-drop.service';

@Directive({
  selector: '[app-drop]'
})
export class DropDirective {

  @Input() dragEnterClass:string;
  @Input() dragTags: string[] = [];
  private data$;

  constructor(
    private el: ElementRef, 
    private rd: Renderer2,
    private dragService: DragDropService
  ) { 
    // this.data$ = dragService.getDragData().take(1);
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(e: Event) {
    if (this.el.nativeElement == e.target) {
      this.rd.addClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(e: Event) {
    if (this.el.nativeElement == e.target) {

    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(e: Event) {
    if (this.el.nativeElement == e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(e: Event) {
    if (this.el.nativeElement == e.target) {
      this.rd.removeClass(this.el.nativeElement, this.dragEnterClass);
    }
  }
}
