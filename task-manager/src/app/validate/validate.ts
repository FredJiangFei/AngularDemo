import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const validateCounterRange: ValidatorFn =
    (control: AbstractControl): ValidationErrors => {
        return (control.value > 10 || control.value < 0) ?
            { 'rangeError': { current: control.value, max: 10, min: 0 } } : null;
    };

export function createCounterRangeValidator(minValue: number, maxValue: number) {
    return (control: AbstractControl): ValidationErrors => {
        return (control.value > +maxValue || control.value < +minValue) ?
            {
                'rangeError': {
                    current: control.value, max: maxValue,
                    min: minValue
                }
            } : null;
    };
}

export class UsernameValidators {
    static cannotContainNumber(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('1') >= 0) {
            return {
                cannotContainNumber: true
            };
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'fredjiang') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
