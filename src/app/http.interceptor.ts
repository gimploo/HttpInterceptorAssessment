import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToasterService } from './services/toaster.service';
import { Injectable } from '@angular/core';


@Injectable()
export class httpIntercept implements HttpInterceptor {

  constructor(private toasterServie: ToasterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
    .pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.toasterServie.success();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.toasterServie.error();
        return throwError(() => error);
      })
    );
  }
}