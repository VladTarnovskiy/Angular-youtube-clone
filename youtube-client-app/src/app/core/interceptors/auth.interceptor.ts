import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

const KEY = 'AIzaSyB81Nh0GpoBz113t0iAy2xf70m4OWLYS4s';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authReq = req.clone({
      params: req.params.set('key', KEY),
    });
    return next.handle(authReq);
  }
}
