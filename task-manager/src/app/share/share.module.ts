import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTabsModule,
  MatBadgeModule,
  MatChipsModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectiveModule } from '../directive/directive.module';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
import { CounterComponent } from './counter/counter.component';
import { DelModalComponent } from './del-modal/del-modal.component';
import { IdentityInputComponent } from './identity-input/identity-input.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TimeAgoPipe} from 'time-ago-pipe';
import { CdkTableModule} from '@angular/cdk/table';
import { PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CdkTableModule,
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatChipsModule,

    FileUploadModule,

    DirectiveModule,
    PaginationModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CdkTableModule,
    MatTabsModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatChipsModule,

    PaginationModule,
    ButtonsModule,
    FileUploadModule,
    DirectiveModule,

    ImageListSelectComponent,
    CounterComponent,
    DelModalComponent,
    IdentityInputComponent,
    TimeAgoPipe,
    ImagePipe
  ],
  declarations:
    [
      ImageListSelectComponent,
      CounterComponent,
      DelModalComponent,
      IdentityInputComponent,
      TimeAgoPipe,
      ImagePipe
    ],
  entryComponents: [DelModalComponent]
})
export class ShareModule { }
