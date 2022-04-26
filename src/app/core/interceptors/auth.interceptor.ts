import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: AuthTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.tokenService.isLogin) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.tokenService.authToken}`
        }
      });
    }

    return next.handle(request);
  }
}
