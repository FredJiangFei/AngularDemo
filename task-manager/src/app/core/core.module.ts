import { NgModule } from '@angular/core';
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
export class CoreModule { }
