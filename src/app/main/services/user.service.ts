import { Injectable } from '@angular/core';
import {HttpService} from "@members/core/services/api/http.service";
import {Store} from "@ngrx/store";
import {UserModel} from "@members/core/models/user.model";
import {EditUserModel} from "@members/main/models/user.model";
import {UserUrl} from "@members/config/url.config";
import {catchError, map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {setUser} from "@members/core/store/actions/user/auth.action";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpService, private store: Store<{authUser: UserModel|null}>,
              private toastr: ToastrService) { }

  editUser(user: EditUserModel) {
    return this.http.patch(UserUrl.userInfo, user).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 422) {
        for (const key of Object.keys(err.error.errors)) {
          user.setError(key, {backend: err.error.errors[key][0]})
        }
      }

      return throwError(err);
    })).pipe(map((data: any) => {
      return data.data as UserModel;
    })).subscribe((data: UserModel) => {
      this.store.dispatch(setUser({user: data}));

      this.toastr.success("You Have Successfully Updated Your Profile Info.", "Success!");
    })
  }
}
