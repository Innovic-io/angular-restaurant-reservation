import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() label: string;

  constructor() {
  }

  ngOnInit() {
  }

  printingValue(data) {
    console.log(data);
  }

  required(controlName) {

    return this.formGroup.get(controlName).hasError('required')
      && this.formGroup.get(controlName).touched;
  }

  minMax(controlName) {
    // console.log(this.formGroup.get(controlName).hasError('required'));
    console.log(this.formGroup.get(controlName).errors);
    return this.formGroup.get(controlName).hasError('minlength')
      || this.formGroup.get(controlName).hasError('maxlength');

  }

  notEmail(controlName) {
    //console.log('mail error');
    return this.formGroup.get(controlName).hasError('email');
  }

}
