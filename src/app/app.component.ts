import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {hidePreloader, showPreloader} from "@members/core/store/actions/core/preloader/preloader.action";
import {UserService} from "@members/core/services/user/user.service";
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<{preloader: boolean}>, private userService: UserService, private tokenService: AuthTokenService) {
    store.dispatch(showPreloader());
  }

  ngOnInit(): void {
    if (this.tokenService.isLogin) {
      this.userService.getAuthUser().add(() => {
        this.store.dispatch(hidePreloader());
      });
    } else {
      this.store.dispatch(hidePreloader());
    }
  }
}
