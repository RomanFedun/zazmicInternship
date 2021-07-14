import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from "./login/auth-layout/auth-layout.component";
import {LoginComponent} from "./login/login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {SiteLayoutComponent} from "./shared/layout/site-layout/site-layout.component";
import {AuthGuard} from "./core/auth.guard";
import {FeedPageComponent} from "./feed/feed-page/feed-page.component";
import {DashboardPageComponent} from "./dashboard/dashboard-page/dashboard-page.component";
import {CreateComponent} from "./feed/feed-page/create/create.component";

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate: [AuthGuard], children:[
      {path: 'feed', component: FeedPageComponent},
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'article/new', component: CreateComponent},
      {path: 'article/:id', component: CreateComponent}
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
