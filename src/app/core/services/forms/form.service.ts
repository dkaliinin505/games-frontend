import { Injectable } from '@angular/core';
import {AbstractControl, AbstractControlOptions, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form?: FormGroup;

  createForm(controls: {[key: string]: AbstractControl;}, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null): FormGroup {
    this.form = new FormGroup(controls, validatorOrOpts);

    return this.form;
  }

  setError(field: string, error: ValidationErrors) {
    this.form?.get(field)?.setErrors(error);
  }
}
