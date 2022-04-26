import {FormGroup} from "@angular/forms";
import {FormModel} from "@members/core/models/forms/form.model";

export class UserLogin extends FormModel {
  email: string;
  password: string;

  recaptcha: string;

  constructor(form: FormGroup, recaptcha: string) {
    super(form);

    this.email = form.get("email")?.value;
    this.password = form.get("password")?.value;

    this.recaptcha = recaptcha;
  }
}

export class UserRegister extends FormModel {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;

  recaptcha: string;

  constructor(form: FormGroup, recaptcha: string) {
    super(form);

    this.name = form.get("name")?.value;
    this.email = form.get("email")?.value;
    this.password = form.get("password")?.value;
    this.password_confirmation = form.get("password_confirmation")?.value;

    this.recaptcha = recaptcha;
  }
}
