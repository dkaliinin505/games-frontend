import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordConfirmation} from "@members/core/validators/auth/ConfirmPasswordValidator";
import {AuthService} from "@members/auth/services/auth.service";
import {UserRegister} from "@members/auth/models/user.model";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerFormGroup: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(99),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
    ]),
    password_confirmation: new FormControl(null, [
      Validators.required
    ]),
  }, {validators: passwordConfirmation});

  constructor(private authService: AuthService, private recaptchaV3Service: ReCaptchaV3Service, private router: Router,
              private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  register() {
    const captchaObserver = this.recaptchaV3Service.execute("register").subscribe((token: string) => {
      captchaObserver.unsubscribe();

      const userModel: UserRegister = new UserRegister(this.registerFormGroup, token);
      this.authService.register(userModel).add(() => {
        this.registerFormGroup.reset();

        this.toastr.success("You Have Successfully Created Your Account", "Success!", {
          progressBar: true,
          positionClass: "toast-top-full-width"
        }).onHidden.pipe(take(1)).subscribe(() => {
          this.router.navigate(["/"])
        })
      });
    });
  }

  ngOnDestroy(): void {
    console.log(123);
  }
}
