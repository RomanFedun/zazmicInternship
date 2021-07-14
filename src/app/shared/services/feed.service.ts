import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Articles} from "../../core/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feedData = {
    name: 'Fedun Roman'
  }

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  fetch(): Observable<Articles[]> {
   return this.http.get<Articles[]>(`${this.auth.url}/articles`)
  }
}
