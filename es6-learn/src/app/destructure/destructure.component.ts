import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destructure',
  templateUrl: './destructure.component.html',
  styleUrls: ['./destructure.component.css']
})
export class DestructureComponent implements OnInit {


  constructor() {
    // let [x, y] = [1, 2];
    // console.log(x);

    //默认值 undefined 才生效
    let [x = 3, y = 8] = [1, undefined];
    console.log(x);
    console.log(y);

    //对象
    let { foo, bar } = { foo: 'aa', bar: 'bb' };
    console.log(foo);
    console.log(bar);

    // const [a, b, c, d] = 'hello';
    // console.log(a);
    // console.log(b);

    //函数参数
    this.add([1, 2])

    //应用
    
  }

  add([x = 9, y]) {
    console.log(x + y);
  }

  ngOnInit() {
  }

}
