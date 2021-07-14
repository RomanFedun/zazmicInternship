import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed-page/feed-page.component';
import {RouterModule} from "@angular/router";
import { CreateComponent } from './feed-page/create/create.component';



@NgModule({
  declarations: [
    FeedPageComponent,
    CreateComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class FeedModule { }
