import { Component, OnInit, Input, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, ValidatorFn, Validator, AbstractControl, ValidationErrors } from '../../../../node_modules/@angular/forms';
import { createCounterRangeValidator } from '../../validate/validate';

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
      useValue: forwardRef(() => CounterComponent),
      multi: true
    }
  ]
})

export class CounterComponent implements ControlValueAccessor,Validator,OnInit,OnChanges {
  @Input() min: number;
  @Input() max: number;

  private _validator: ValidatorFn;
  ngOnInit() {
    this._validator = createCounterRangeValidator(this.max, this.min);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.min || changes.max) {
      this._validator = createCounterRangeValidator(this.max, this.min);
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator(c);
  }

  @Input() _count: number = 0;
  set count(val:number){
    this._count = val;
    this.propagateChange(this.count);
  }
  get count(){  return this._count; }

  increment() {  this.count++; }
  decrement() {  this.count--;  }

  writeValue(obj: any): void {
    if (obj) {
      this.count = obj;
    }
  }

  propagateChange = (_: any) => { };
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
