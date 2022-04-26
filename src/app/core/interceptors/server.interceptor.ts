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
export class ServerInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status >= 500) {
        this.toastr.error('Something Went Wrong. Please contact us!', 'Error', {
          progressBar: true
        });
      }

      return throwError(err);
    }));
  }
}
