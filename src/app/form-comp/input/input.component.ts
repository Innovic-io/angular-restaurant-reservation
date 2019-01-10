import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label;

  constructor() {}

  ngOnInit() {}

  printingValue(data) {
    console.log(data);
  }


}
