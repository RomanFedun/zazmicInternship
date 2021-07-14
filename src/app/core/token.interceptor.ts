import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from "../shared/services/auth.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
              private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if(this.auth.isAuthenticate()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      })
    }
      return next.handle(request).pipe(
        catchError(
          (error: HttpErrorResponse) => this.handleAuthError(error)
        )
      )

  }

  private handleAuthError(error: HttpErrorResponse): Observable<any> {
    if(error.status === 401 || error.status === 403) {
      localStorage.clear()
      this.auth.jwt = ''
      this.router.navigate(['/login'], {
        queryParams: {
          expire: true
        }
      })
    }
    return throwError(error)
  }
}
