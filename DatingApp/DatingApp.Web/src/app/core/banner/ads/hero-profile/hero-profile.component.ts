import { PopupService } from './../../../../service/popup.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent {
  @Input() data: any;

  constructor(private popupService: PopupService) {

  }

  helloHero() {
    this.popupService.showAsComponent(this.data.name);
  }
}
