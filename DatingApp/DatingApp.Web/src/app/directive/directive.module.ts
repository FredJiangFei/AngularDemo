import { NgModule } from '@angular/core';
import { DragDirective } from './drag.directive';
import { DropDirective } from './drop.directive';
import { DragDropService } from './drag-drop.service';
import { AdDirective } from '../core/banner/ad.directive';

@NgModule({
  imports: [],
  declarations: [DragDirective, DropDirective, AdDirective],
  exports: [DragDirective, DropDirective, AdDirective],
  providers: [DragDropService]
})
export class DirectiveModule { }
