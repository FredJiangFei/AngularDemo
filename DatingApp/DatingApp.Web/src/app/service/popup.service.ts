import { PopupComponent } from './../share/popup/popup.component';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';

@Injectable()
export class PopupService {
  constructor(private injector: Injector,
              private appRef: ApplicationRef,
              private resolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    const popup = document.createElement('popup-component');
    const sideNav = document.getElementById('footer-container');

    const factory = this.resolver.resolveComponentFactory(PopupComponent);
    const popupRef = factory.create(this.injector, [], popup);

    this.appRef.attachView(popupRef.hostView);

    popupRef.instance.closed.subscribe(() => {
      sideNav.removeChild(popup);
      this.appRef.detachView(popupRef.hostView);
    });

    popupRef.instance.message = message;
    sideNav.appendChild(popup);
  }

  showAsElement(message: string) {
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;
    const sideNav = document.getElementById('footer-container');
    popupEl.addEventListener('closed', () => sideNav.removeChild(popupEl));
    popupEl.message = message;
    sideNav.appendChild(popupEl);
  }
}
