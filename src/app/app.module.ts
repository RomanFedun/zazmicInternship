import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { ChangeStyleDirective } from './core/directives/change-style.directive';
import { SiteLayoutComponent } from './shared/layout/site-layout/site-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FilterPipe,
    ChangeStyleDirective,
    SiteLayoutComponent,
    AuthLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
