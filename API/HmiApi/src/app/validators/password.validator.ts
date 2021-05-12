import { AbstractControl } from '@angular/forms';
export class PasswordValidator {
    static MatchPassword(AC: AbstractControl) {
        let passwordControl = AC.get('password');
        let confirmPasswordControl = AC.get('confirmPassword');
        if (passwordControl != null && confirmPasswordControl != null) {
            let password = passwordControl.value;
            let confirmPassword = confirmPasswordControl.value;
            if (password != confirmPassword) {
                console.log('false');
                confirmPasswordControl.setErrors({ MatchPassword: true })
            }
        } else {
            return null;
        }
    }
}