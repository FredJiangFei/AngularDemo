import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regexp',
  templateUrl: './regexp.component.html',
  styleUrls: ['./regexp.component.css']
})
export class RegexpComponent implements OnInit {

  constructor() {
    //1. RegExp 构造函数
    //如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
    var regex = new RegExp('xyz', 'i');
    var regex = new RegExp(/xyz/i);
    var regex = new RegExp(/xyz/ig, 'i');
     regex.flags;

    //2. 字符串的正则方法
    // String.prototype.match 调用 RegExp.prototype[Symbol.match]
    // String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
    // String.prototype.search 调用 RegExp.prototype[Symbol.search]
    // String.prototype.split 调用 RegExp.prototype[Symbol.split]

    //3.u 修饰符 
    var withU = new RegExp(/^\uD83D/u);
    var withoutU = new RegExp(/^\uD83D/);
    withU.test('\uD83D\uDC2A');
    withoutU.test('\uD83D\uDC2A');

    var s = '𠮷𠮷';
    console.log(s.length) // 4
    console.log(this.codePointLength(s)) // 2

   }

   codePointLength(text) {
    var result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
    
    //y修饰符
    //g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始

    //lastIndex属性指定每次搜索的开始位置
  }

  ngOnInit() {
  }

}
