import { Component, OnInit, Input, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { AdItem } from './ad-item';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy  {

  @Input() ads: AdItem[] = [
    new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

    new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

    new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                      body: 'Submit your resume today!'}),

    new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                      body: 'Apply today'}),
  ];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}

