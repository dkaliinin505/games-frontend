import { Injectable } from '@angular/core';
import {HttpService} from "@members/core/services/api/http.service";
import {AuthUrl} from "@members/config/url.config";
import {UserLogin, UserRegister} from "@members/auth/models/user.model";
import {UserModel} from "@members/core/models/user.model";
import {TokenModel} from "@members/auth/models/token.model";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";
import {Store} from "@ngrx/store";
import {setUser} from "@members/core/store/actions/user/auth.action";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService, private tokenService: AuthTokenService, private store: Store<{authUser: UserModel|null}>) { }

  register(user: UserRegister) {
    return this.http.post(AuthUrl.register, user).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 422) {
        for (const key of Object.keys(err.error.errors)) {
          user.setError(key, {backend: err.error.errors[key][0]})
        }
      }

      return throwError(err);
    })).subscribe((data: {data: UserModel, meta: TokenModel}) => {
      this.tokenService.setToken(data.meta.token);
      this.store.dispatch(setUser({user: data.data}))
    });
  }


  login(user: UserLogin) {
    return this.http.post(AuthUrl.login, user).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 422) {
        console.log(err.status);
        for (const key of Object.keys(err.error.errors)) {
          user.setError(key, {backend: err.error.errors[key][0]})
        }
      }

      return throwError(err);
    })).subscribe((data: {data: UserModel, meta: TokenModel}) => {
      console.log(data);
      this.tokenService.setToken(data.meta.token);
      this.store.dispatch(setUser({user: data.data}))
    });
  }
}
