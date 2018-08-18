import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageListSelectComponent,
      // useExisting: forwardRef(() => ImageListSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ImageListSelectComponent,
      multi: true
    }
  ]
})
export class ImageListSelectComponent implements ControlValueAccessor {
  @Input()
  avatars: string[];

  choosedAavtar: string;

  constructor() { }

  private propagateChange = (_: any) => { };

  selectAvatar(avatar) {
    this.choosedAavtar = avatar
  }

  //设置原生表单控件的值
  writeValue(obj: any): void {
    this.choosedAavtar = obj;
    // this.propagateChange(this.choosedAavtar);
  }

  //注册由每次原生表单控件值更新时触发的回调函数
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

   //注册用户和控件交互时触发的回调
   registerOnTouched(fn: any): void {
    
  }

  validate(c: FormControl): { [key: string]: any } {
    return this.choosedAavtar ? null : {
      imageListInvalid: {
        valid: false
      }
    }
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
