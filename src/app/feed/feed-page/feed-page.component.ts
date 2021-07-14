import { Component, OnInit } from '@angular/core';
import {FeedService} from "../../shared/services/feed.service";
import {Observable} from "rxjs";
import {Articles} from "../../core/interfaces";
import {tap} from "rxjs/operators";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  public articles$?: Observable<Articles[]>
  source = ''

  constructor(private feedService: FeedService,
              auth: AuthService) {
    this.source = auth.url
  }

  ngOnInit(): void {
    this.articles$ = this.feedService.fetch()
  }

}
