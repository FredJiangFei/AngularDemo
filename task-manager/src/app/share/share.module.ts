import { NotFoundComponent } from './not-found/not-found.component';
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
  MatSelectModule
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
import { MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';

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

    FileUploadModule,

    DirectiveModule,
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

    FileUploadModule,
    DirectiveModule,

    ImageListSelectComponent,
    CounterComponent,
    DelModalComponent,
    IdentityInputComponent,
    NotFoundComponent,
    TimeAgoPipe,
  ],
  declarations:
    [
      ImageListSelectComponent,
      CounterComponent,
      DelModalComponent,
      IdentityInputComponent,
      NotFoundComponent,
      TimeAgoPipe
    ],
  entryComponents: [DelModalComponent]
})
export class ShareModule { }
