import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  name?: string
  currentRout?: string
  links = [
    {url: '/dashboard', name: 'Dashboard', src: 'icon-dashboard'},
    {url: '/feed', name: 'News Feed', src: 'icon-newsFeedDark'}
  ]

  constructor(private feedService: FeedService,
              private router: Router) {

    router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRout = event.url
      })
  }

  ngOnInit(): void {
    this.name = this.feedService.feedData.name
  }

  openMenu() {
    console.log('menu work')
  }
}
