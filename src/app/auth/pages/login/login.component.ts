import { Component, OnInit } from '@angular/core';
import {AuthLinks} from "@members/auth/auth.links";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ReCaptchaV3Service } from 'ng-recaptcha';
import {UserLogin} from "@members/auth/models/user.model";
import {AuthService} from "@members/auth/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {hidePreloader, showPreloader} from "@members/core/store/actions/core/preloader/preloader.action";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public links = AuthLinks;

  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
    ]),
  });

  constructor(private authService: AuthService, private recaptchaV3Service: ReCaptchaV3Service, private router: Router,
              private toastr: ToastrService, private store: Store<{preloader: boolean}>) { }

  ngOnInit(): void {}

  login(): void {
    this.store.dispatch(showPreloader())

    this.recaptchaV3Service.execute("login").subscribe((token) => {
      const userModel = new UserLogin(this.loginFormGroup, token);

      this.authService.login(userModel).add(() => {
        this.router.navigate(["/"]).then(() => {
          this.store.dispatch(hidePreloader());

          this.toastr.success("You Have Successfully Logged In", "Success!", {
            progressBar: true,
            positionClass: "toast-top-full-width"
          })
        });
      });
    });
  }
}
