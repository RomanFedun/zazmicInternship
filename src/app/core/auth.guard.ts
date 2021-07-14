import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../shared/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
      if (this.auth.isAuthenticate()) {
        return of(true)
      } else {
        this.router.navigate(['/login'], {
          queryParams: {
            sessionFailed: true
          }
        })
        return of(false)
      }
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(childRoute, state)
  }
}
