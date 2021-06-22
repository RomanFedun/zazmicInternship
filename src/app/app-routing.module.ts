import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLayoutComponent} from "./shared/layout/auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";

const routes: Routes = [{
  path: '', component: AuthLayoutComponent, children: [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
