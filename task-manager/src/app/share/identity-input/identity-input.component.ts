import { IdentityType, Identity } from './../../domain/user.domain';
import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl,
  Validator,
  AbstractControl
} from '@angular/forms';
import { Subject, Observable, combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-identity-input',
  templateUrl: './identity-input.component.html',
  styleUrls: ['./identity-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IdentityInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: forwardRef(() => IdentityInputComponent),
      multi: true
    }
  ]
})

export class IdentityInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy, Validator {
  identityTypes = [
    {
      value: IdentityType.IdCard, label: 'IdCard'
    },
    {
      value: IdentityType.Insurance, label: 'Insurance'
    },
    {
      value: IdentityType.Military, label: 'Military'
    },
    {
      value: IdentityType.Passport, label: 'Passport'
    },
    {
      value: IdentityType.Other, label: 'Other'
    }
  ]
  identity: Identity = { identityType: null, identityNo: null };
  private sub: Subscription;

  private _idType = new Subject<IdentityType>();
  get IdType(): Observable<IdentityType> {
    return this._idType.asObservable();
  }
  onIdTypeChange(idType: IdentityType) {
    this._idType.next(idType);
  }

  private _idNo = new Subject<string>();
  get IdNo(): Observable<string> {
    return this._idNo.asObservable();
  }
  onIdNoChange(idNo: string) {
    this._idNo.next(idNo);
  }

  ngOnInit() {
    const val$ = combineLatest(this.IdNo, this.IdType, (_no, _type) => {
      return {
        identityType: _type,
        identityNo: _no
      }
    });
    console.log(this.IdNo);
    console.log(this.IdType);
    let sub = val$.subscribe(id => this.propagateChange(id));
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  writeValue(obj: any): void {
    if (obj) {
      this.identity = obj;
    }
  }

  propagateChange = (_: any) => { };
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }

  validate(c: AbstractControl): { [key: string]: any; } {
    const val = c.value;
    if (!val) {
      return null;
    }

    console.log(val);
    switch (val.identityType) {
      case IdentityType.IdCard: {
        return this.validateCard(val.identityNo);
      }
    }
  }

  validateCard(val: string): { [key: string]: any; } {
    if (val.length != 18) {
      return { idInvalid: true };
    }

    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {

  }
}
