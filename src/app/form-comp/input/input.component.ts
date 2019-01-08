import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() formChild: FormGroup;
  @Input() inputComponentName: string;
  @Input() label;
  @Output() name = new EventEmitter<string>();


  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.name.emit(this.inputComponentName);


  }


  printingValue(data) {
    console.log(data);
  }


}
