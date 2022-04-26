import { Component, OnInit } from '@angular/core';
import {AuthLinks} from "@members/auth/auth.links";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public links = AuthLinks;

  constructor() { }

  ngOnInit(): void {
  }

}
