import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor,
          NG_VALUE_ACCESSOR,
          NG_VALIDATORS,
          FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageListSelectComponent,
      multi: true
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: ImageListSelectComponent,
    //   multi: true
    // }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input() avatars: string[];

  choosedAavtar: string;

  selectAvatar(avatar) {
    this.choosedAavtar = avatar;
    this.propagateChange(avatar);
  }

  writeValue(obj: any): void {
    this.choosedAavtar = obj;
  }

  propagateChange = (_: any) => { };
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

   registerOnTouched(fn: any): void {}
}
