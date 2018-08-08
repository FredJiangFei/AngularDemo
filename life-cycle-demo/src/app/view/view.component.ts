import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log(`Hello ${name}`);
  }

  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit');
  }
}
