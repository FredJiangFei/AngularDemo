import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-extension',
  templateUrl: './string-extension.component.html',
  styleUrls: ['./string-extension.component.css']
})
export class StringExtensionComponent implements OnInit {

  sevenWrong = '\u20BB7';
  seven = '\u{20BB7}';
  tag : string;

  constructor() {

    let a = 15;
    let b = 20;
    this.tag = this.passthru`Hello ${a} world ${a + b}`

    // console.log(String.raw({ raw: 'test' }, 0, 1, 2));
  }

  ngOnInit() {
  }

  passthru(stringArr, ...values) {
    let output = "";
    let index;
    for (index = 0; index < values.length; index++) {
      output += stringArr[index] + values[index];
    }
    output += stringArr[index]
    return output;
  }
}
