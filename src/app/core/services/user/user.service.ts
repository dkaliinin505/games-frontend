import { Injectable } from '@angular/core';
import {HttpService} from "@members/core/services/api/http.service";
import {UserUrl} from "@members/config/url.config";
import {map} from "rxjs/operators";
import {UserModel} from "@members/core/models/user.model";
import {Store} from "@ngrx/store";
import {setUser} from "@members/core/store/actions/user/auth.action";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService, private store: Store<{authUser: UserModel|null}>) { }

  getAuthUser() {
    return this.httpService.get(UserUrl.userInfo).pipe(map((data: any) => {
      return data.data as UserModel;
    })).subscribe((data: UserModel)  => {
      this.store.dispatch(setUser({user: data}));

      return data;
    });
  }
}
