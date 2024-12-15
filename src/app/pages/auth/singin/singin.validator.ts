import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valorCampo = control.value;

    if (!valorCampo || valorCampo.trim() === '') {
      return null;
    }

    const isValid =
      valorCampo.length >= 6 &&
      /[a-z]/.test(valorCampo) &&
      /[0-9]/.test(valorCampo);

    return isValid ? null : { invalidPassword: true };
  };
}
