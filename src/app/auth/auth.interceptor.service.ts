
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private AuthService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.AuthService.userSubject.pipe(
      take(1),
      exhaustMap(user => {
        if (user?.token) {
          let params = new HttpParams().set('auth', user.token);
          const modifiedReq = req.clone({ params: params });
          return next.handle(modifiedReq); // Make sure you return `next.handle()` which is an Observable.
        } else {
          // If no token, return the original request or handle as needed
          return next.handle(req);
        }
      })
    );

  }


}
