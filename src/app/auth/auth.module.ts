import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layout/main/main.component';
import {AuthRoutingModule} from "./auth-routing.module";
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaModule, RecaptchaFormsModule} from "ng-recaptcha";
import {IconsModule} from "@members/core/icons/icons.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "@members/auth/services/auth.service";


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
