import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() image?: string
  @Input() text?: string
  @Input() type?: string
  @Input() stage?: string

  constructor() { }

  ngOnInit(): void {
  }

}
