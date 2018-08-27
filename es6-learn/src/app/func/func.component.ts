import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func',
  templateUrl: './func.component.html',
  styleUrls: ['./func.component.css']
})
export class FuncComponent implements OnInit {

  id = 21;
  foo() {
    setTimeout(() => {
      console.log('id', this.id);
    }, 100);
  }

  s1 = 0;
  s2 = 0;

  ngOnInit() {
    //arrow
    // this.foo.call({ id: 42 });

    setInterval(() => this.s1++, 1000);

    setInterval(function () {
      this.s2++;
    }, 1000);

    setTimeout(() => {
      console.log('s1:', this.s1);
    }, 3100);

    setTimeout(() => {
      console.log('s2:', this.s2);
    }, 3100);
  }

}
