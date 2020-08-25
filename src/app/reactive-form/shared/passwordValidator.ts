import {AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
      const password=control.get('password');
      const c_password=control.get('c_password');    
      
      if(password.pristine || c_password.pristine){
          return null;
      }
      return password && c_password && password.value !== c_password.value?
       {'mismatch': true} : null;
    }