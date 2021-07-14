import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../core/interfaces";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwt = ''
  public url = 'http://skillplus.germanywestcentral.cloudapp.azure.com:1337'

  constructor(private http: HttpClient) {
  }

  // register(user: User): Observable<User> {
  //   return this.http.post<User>('/auth/register', user)
  // }

  login(user: User): Observable<{jwt: string}> {
    return this.http.post<{ jwt: string }>(
      `${this.url}/auth/local`, user)
      .pipe(
        tap(
          ({jwt}) => {
            localStorage.setItem('auth-token', jwt)
            this.setToken(jwt)
          }
        )
      )
  }

  getToken(): any {
    return this.jwt
  }

  setToken(token: string) {
    this.jwt = token
  }

  isAuthenticate(): boolean {
    if (localStorage.getItem('auth-token')) {
      return true
    } else {
      return false
    }
  }
}

