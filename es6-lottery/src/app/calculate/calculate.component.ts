import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  playList = new Map();
//   [
//     [ 'R1', 1 ],
//     [ 'R2', 2 ],
//     [ 'R3', 3 ]
// ]
  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.playList.set('R1', 1);
    //   this.playList.set('R2', 2);
    //   this.playList.set('R3', 3);
    // }, 0);
  }

  calculateCount(active, play_name) {
    // let count = 0;
    // const exist = this.play_list
  }
}
