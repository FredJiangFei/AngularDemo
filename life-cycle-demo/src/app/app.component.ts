import { ViewComponent } from './view/view.component';
import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit, AfterViewChecked {

  greeting: string = 'Hello';
  user: { name: string } = { name: 'Tom' };
  title = 'app';

  message:string;

  @ViewChild('viewA')
  child1: ViewComponent

  ngOnInit(): void {
    this.child1.greeting('Tom');
  }

  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.message = '234';
    }, 0);
  
    console.log('parent ngAfterViewInit');
  }
}
