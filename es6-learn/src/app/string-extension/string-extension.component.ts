import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-extension',
  templateUrl: './string-extension.component.html',
  styleUrls: ['./string-extension.component.css']
})
export class StringExtensionComponent implements OnInit {

  sevenWrong = '\u20BB7';
  seven = '\u{20BB7}';

  constructor() {

    let a = 15;
    let b = 20;
    this.tag`Hello ${a} world ${a + b}`
  }

  ngOnInit() {
  }

  tag(stringArr, ...values) {
    console.log(stringArr);
    values.forEach(element => {
      console.log(element);
    });
  }
}
