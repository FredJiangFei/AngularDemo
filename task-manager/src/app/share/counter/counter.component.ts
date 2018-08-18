import { Component, OnInit, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidatorFn, Validator, AbstractControl, ValidationErrors } from '../../../../node_modules/@angular/forms';
import { createCounterRangeValidator, validateCounterRange } from '../../validate/validate';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: forwardRef(() => CounterComponent), //validateCounterRange,
      multi: true
    }
  ]
})

export class CounterComponent implements ControlValueAccessor,Validator,OnChanges { // 
  @Input() min: number;
  @Input() max: number;

  private _validator: ValidatorFn;
  private _createValidator(): void {
    this._validator = createCounterRangeValidator(this.max, this.min);
  }
  validate(c: AbstractControl): ValidationErrors | null {
    return this.min == null || this.max == null ? null : this._validator(c);
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (changes.min || changes.max) {
      this._createValidator();
    }
  }

  @Input() count: number = 0;

  writeValue(obj: any): void {
    if (obj) {
      this.count = obj;
    }
  }

  propagateChange = (_: any) => { };
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  increment() {
    this.count++;
    this.propagateChange(this.count);
  }

  decrement() {
    this.count--;
    this.propagateChange(this.count);
  }

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
