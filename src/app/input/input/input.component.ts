import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() image: string | undefined
  @Input() type: string | undefined
  @Input() text: string | undefined
  @Input() placeHolder: string | undefined
  @Input() control: AbstractControl | any = new FormControl()

  constructor() { }

  ngOnInit(): void {
  }

}
