import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  icons = [
    {src: 'icon-viewBar center', link: '/feed', class: 'active'},
    {src: 'icon-defaultBar center', link: '/default', class: ''},
    {src: 'icon-tileBar center', link: '/tile', class: ''}
  ]

  categories = [
    {src: 'icon-th-small', link: '/all', text: 'All articles', filter() {console.log('all')}},
    {src: 'icon-heart', link: '/liked', text: 'Liked articles', filter() {console.log('liked')}},
    {src: 'icon-star', link: '/favorites', text: 'Favorites', filter() {console.log('favor')}}
  ]

  filters = [
    {src: 'icon-TagFilter', text: 'By tags', throwPipe() {console.log('by tags')}},
    {src: 'icon-manFilter', text: 'By author', throwPipe() {console.log('by author')}}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
