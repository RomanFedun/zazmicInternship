import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{
  title = 'myIntern';

  constructor(private auth: AuthService) {
    const  potentialToken = localStorage.getItem('auth-token')
    if(!!potentialToken) {
      this.auth.jwt = potentialToken
    }
  }

  ngOnInit() {

  }
}
