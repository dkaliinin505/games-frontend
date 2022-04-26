import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {MainComponent} from "./layout/main/main.component";
import {RegisterComponent} from "./pages/register/register.component";
import {ForgotPasswordComponent} from "@members/auth/pages/forgot-password/forgot-password.component";
import {GuestGuard} from "@members/core/guards/guest.guard";

const routes: Routes = [
  {path: "", redirectTo: "/auth/login", pathMatch: 'full' },
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
    ],
    canActivate: [
      GuestGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
