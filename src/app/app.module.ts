import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { ChangeStyleDirective } from './core/directives/change-style.directive';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { AuthLayoutComponent } from './login/auth-layout/auth-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {LoginModule} from "./login/login.module";
import {SideBarComponent} from "./shared/layout/site-layout/side-bar/side-bar.component";
import {InputModule} from "./input/input.module";
import {CheckBoxModule} from "./check-box/check-box.module";
import {ButtonModule} from "./button/button.module";
import {TokenInterceptor} from "./core/token.interceptor";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./core/auth.guard";
import {FeedModule} from "./feed/feed.module";

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        FilterPipe,
        ChangeStyleDirective,
        SiteLayoutComponent,
        AuthLayoutComponent,
        NotFoundComponent,
        SideBarComponent
    ],
  imports: [
  //   RouterModule.forRoot([
  //   {path: '', component: SiteLayoutComponent, canActivate: [AuthGuard]}
  // ]),
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    InputModule,
    CheckBoxModule,
    ButtonModule,
    FormsModule,
    FeedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
