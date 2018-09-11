import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from '../service/service.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { loadSvgResoures } from '../utils/svg.util';
import { ShareModule } from '../share/share.module';
import '../utils/debug.util';
import { JwtModule } from '../../../node_modules/@auth0/angular-jwt';
import { BannerComponent } from './banner/banner.component';
import { HeroJobAdComponent } from './banner/hero-job-ad.component';
import { HeroProfileComponent } from './banner/hero-profile.component';
import { AppStoreModule } from '../redux/reducers';
import { AppEffectsModule } from '../redux/effects';
import { NotFoundComponent } from './not-found/not-found.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    ServiceModule,
    BrowserAnimationsModule,
    AppStoreModule,
    AppEffectsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/auth/']
      }
    })
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BannerComponent,
    NotFoundComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    BannerComponent
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        host: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('core module can call only once');
    }

    loadSvgResoures(ir, ds);
  }
}
