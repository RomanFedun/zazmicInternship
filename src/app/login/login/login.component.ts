import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ButtonComponent} from "../../button/button/button.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup | any
  uSub: Subscription | undefined

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(8)
      ])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if(params['registered']) {
        //message 'Success'
      } else if(params['accessDenied']) {
        //message 'You should authorized'
      } else if(params['sessionExpired']) {
        //message 'authorized again'
      }
    })

  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()
    const user = {
      identifier: this.form.value.email,
      password: this.form.value.password
    }
    this.uSub = this.auth.login(user).subscribe(
      () => this.router.navigate(['/feed']),
      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }
}
