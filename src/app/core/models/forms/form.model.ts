import {FormGroup, ValidationErrors} from "@angular/forms";

export abstract class FormModel {
  protected constructor(protected form: FormGroup) {}

  public setError(field: string, errors: {[key: string]: any}) {
    this.form.get(field)?.setErrors(errors);
  }

  toJSON() {
    const map = new Map();

    for (const [key, value] of Object.entries(this)) {
      if (key !== "form") {
        map.set(key, value);
      }
    }

    return Object.fromEntries(map);
  }
}
