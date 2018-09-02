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
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        host: 'http://localhost:5000/api'
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
