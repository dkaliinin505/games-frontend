import { Component, OnInit } from '@angular/core';
import {UserModel} from "@members/core/models/user.model";
import {Store} from "@ngrx/store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EditUserModel} from "@members/main/models/user.model";
import {UserService} from "@members/main/services/user.service";
import {hidePreloader, showPreloader} from "@members/core/store/actions/core/preloader/preloader.action";
import {OtpTypes} from "@members/config/otp.config";

import {OtpService} from "@members/core/services/security/otp.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user: UserModel|null = null;
  isProcessing: boolean = false;
  otpPhone: OtpTypes = OtpTypes.phone;
  otpEmail: OtpTypes = OtpTypes.email;

  profileFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(1)
    ]),
    phone_number: new FormControl("", [
      Validators.required,
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private userService: UserService, private store: Store<{authUser: UserModel, preloader: boolean}>,
              private otpService: OtpService) {
    store.select("authUser").subscribe((data: UserModel|null) => {
      this.user = data;
      this.profileFormGroup.get("name")?.setValue(data?.name);
      this.profileFormGroup.get("email")?.setValue(data?.email);
      this.profileFormGroup.get("phone_number")?.setValue(data?.phone_number);
    });
  }

  ngOnInit(): void {}

  save() {
    this.isProcessing = true;
    this.store.dispatch(showPreloader());
    const userModel = new EditUserModel(this.profileFormGroup);

    this.userService.editUser(userModel).add(() => {
      this.isProcessing = false;
      this.store.dispatch(hidePreloader());
    });
  }

  verify(otpType: OtpTypes) {
    this.otpService.createOtp(otpType);
  }
}
