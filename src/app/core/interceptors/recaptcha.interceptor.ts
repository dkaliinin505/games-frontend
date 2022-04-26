import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, take} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class RecaptchaInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 422 && "recaptcha" in err.error.errors) {
        this.toastr.error('Invalid Recaptcha', 'Error', {
          progressBar: true
        }).onHidden.pipe(take(1)).subscribe(() => window.location.reload());
      }

      return throwError(err);
    }));
  }
}
