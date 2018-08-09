import { FormControl, AbstractControl } from "@angular/forms";


export function mobileValidator(control: AbstractControl): any {
    if (control.value.includes('1')) {
        return { mobile: true };
    }
    return null;
}

export function passwordEqualValidator(group: AbstractControl): any {
    let password = group.get('password') as FormControl;
    let confirm = group.get('confirm') as FormControl;

    if (password.value != confirm.value) {
        return { equal: 'Password is not equal!' }
    }

    return null;
}