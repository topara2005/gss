import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { SessionService } from './session.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private sessionService: SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.sessionService.GetToken();
    const authRequest = req.clone({headers: req.headers.set("Authorization", authHeader)});
    return next.handle(authRequest);
  }
}
