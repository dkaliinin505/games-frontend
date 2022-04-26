import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(private tokenService: AuthTokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.tokenService.isLogin;
  }

}
