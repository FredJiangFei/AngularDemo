import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResoures } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    MatSidenavModule,
    BrowserAnimationsModule,

    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error('core module can call only once')
    }

    loadSvgResoures(ir, ds);
  }
}
