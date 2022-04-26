import { Component, OnInit } from '@angular/core';
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";
import {UserModel} from "@members/core/models/user.model";
import {Store} from "@ngrx/store";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {GroupNavLinks, userDropdownLinks} from "@members/config/links.config";
import {AuthLinks} from "@members/auth/auth.links";

@Component({
  selector: 'members-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel|null = null;
  icon = faChevronDown;
  userLinks: GroupNavLinks[] = userDropdownLinks;
  authLinks = AuthLinks;

  constructor(private tokenService: AuthTokenService, private store: Store<{authUser: UserModel}>) {
    store.select("authUser").subscribe((data: UserModel) => {
      this.user = data;
    });
  }

  ngOnInit(): void {
    console.log(this.userLinks);
  }

  logout() {
    this.tokenService.removeToken();
  }

  get isLogin() {
    return this.tokenService.isLogin;
  }
}
