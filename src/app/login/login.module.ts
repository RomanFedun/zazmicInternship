import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "../input/input.module";
import {ButtonModule} from "../button/button.module";
import {CheckBoxModule} from "../check-box/check-box.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        ButtonModule,
        CheckBoxModule
    ]
})
export class LoginModule { }
