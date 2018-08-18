import { ValidatorFn, AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";

export const validateCounterRange: ValidatorFn = 
(control: AbstractControl): ValidationErrors => {
    return (control.value > 10 || control.value < 0) ?
        { 'rangeError': { current: control.value, max: 10, min: 0 } } : null;
};

export function createCounterRangeValidator(minValue: number,maxValue: number) {
    return (control: AbstractControl): ValidationErrors => {
        return (control.value > +maxValue || control.value < +minValue) ?
          { 'rangeError': { current: control.value, max: maxValue, 
               min: minValue }} : null;
    }
}