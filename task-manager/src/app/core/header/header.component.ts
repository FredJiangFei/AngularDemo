import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  toggle = new EventEmitter();

  @Output()
  toggleTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.toggle.emit();
  }

  onChange(checked: boolean){
    this.toggleTheme.emit(checked);
  }
}
