import { IdentityType, Identity } from './../../domain/user.domain';
import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormControl
} from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { combineLatest } from 'rxjs/operators';

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

export class IdentityInputComponent implements ControlValueAccessor, OnInit {

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
    // const val$ = Observable.combineLatest(this.IdNo, this.IdType, (_id, _type) =>{
    //    return {
    //      identityType: _type,
    //      identityNo : _id
    //    }
    // })
  }

  writeValue(obj: any): void {

  }

  propagateChange = (_: any) => { };
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}
