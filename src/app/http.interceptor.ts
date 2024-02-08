import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToasterService } from './services/toaster/toaster.service';


export class httpIntercept implements HttpInterceptor {

  //constructor(toasterServie: ToasterService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request)
    .pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('http response');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.log('http error');
        return throwError(() => error);
      })
    );
  }
}