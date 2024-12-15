import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let valorCampo = control.value;
  
      if (!valorCampo || valorCampo == '') {
        return null;
      }
  
      let isValid = 
        valorCampo.length >= 9 && 
        /[A-Z]/.test(valorCampo) && 
        /[a-z]/.test(valorCampo) && 
        /[0-9]/.test(valorCampo); 
  
      return isValid ? null : { invalidPassword: true };
    };
  }