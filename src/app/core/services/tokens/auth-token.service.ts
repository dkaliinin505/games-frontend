import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private localStorage: Storage = window.localStorage

  setToken(token: string) {
    this.localStorage.setItem("auth_token", token);
  }

  removeToken() {
    this.localStorage.removeItem("auth_token");
  }

  get authToken(): string | null {
    return this.localStorage.getItem("auth_token");
  }

  get isLogin(): boolean {
    return this.authToken !== null;
  }
}
