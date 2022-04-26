import {FormModel} from "@members/core/models/forms/form.model";
import {FormGroup} from "@angular/forms";

export class EditUserModel extends FormModel {
  public name: string;
  public email: string|null;
  public phone: string|null;


  constructor(form: FormGroup) {
    super(form);

    this.name = form.get("name")?.value;
    this.email = form.get("email")?.value;
    this.phone = form.get("phone_number")?.value;
  }
}
