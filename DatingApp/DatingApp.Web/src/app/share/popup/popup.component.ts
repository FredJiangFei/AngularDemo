import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() message;
  @Output() closed = new EventEmitter<string>();
  onClick() {
    this.closed.emit(`Hi, ${this.message} talking.`);
  }
}
