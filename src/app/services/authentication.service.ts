import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements HttpInterceptor{

  constructor() { }

  token = '_nbSD5HAq6LKNOB5EDU6'

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.token
      }
    });
    return next.handle(jwtToken);
  }
}
