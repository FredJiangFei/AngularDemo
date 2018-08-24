import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() {
    //Number
    console.log(Number.EPSILON);

    //Math
    console.log(`4.5 trunc is ${Math.trunc(4.5)}`);
    // console.log(`'123.44' trunc is ${Math.trunc('123.44')}`);
    //sign
    //cbrt
    console.log(Math.hypot(3, 4));

    //指数
    // console.log(2 ** 2);
    // console.log(2 ** 3);
    let a = 2;
    a **= 2;
    console.log(a);

    let b = 3;
    b **= 3;
    console.log(b);

  }

  ngOnInit() {
  }

}
