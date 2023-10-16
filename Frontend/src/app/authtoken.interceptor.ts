import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserdataService} from "./services/userdata.service";

@Injectable()
export class AuthtokenInterceptor implements HttpInterceptor {

  constructor(private userService: UserdataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.userService.getToken();
    return next.handle(req.clone({setHeaders:{authorization: `Bearer ${jwt}`}}));
  };
}
