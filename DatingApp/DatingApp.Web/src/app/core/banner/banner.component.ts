import { HeroProfileComponent } from './ads/hero-profile/hero-profile.component';
import { PopupService } from './../../service/popup.service';
import { Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy  {

  @Input() ads: AdItem[] = [
    new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

    new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'})
  ];
  idx = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.idx = (this.idx + 1) % this.ads.length;
    const adItem = this.ads[this.idx];

    const factory = this.resolver.resolveComponentFactory(adItem.component);

    const viewRef = this.adHost.viewContainerRef;
    viewRef.clear();

    const componentRef = viewRef.createComponent(factory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

