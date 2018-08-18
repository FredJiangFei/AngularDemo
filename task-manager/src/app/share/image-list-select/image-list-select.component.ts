import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.css']
})
export class ImageListSelectComponent implements OnInit {

  @Input()
  avatars:string[];

  choosedAavtar:string;

  constructor() { }

  ngOnInit() {
  }

  selectAvatar(avatar){
     this.choosedAavtar = avatar
  }

}
