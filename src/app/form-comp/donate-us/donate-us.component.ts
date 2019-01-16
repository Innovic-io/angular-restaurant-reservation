import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
  ɵisDefaultChangeDetectionStrategy
} from '@angular/core';
import { Options } from 'ng5-slider';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DonateUsComponent),
  multi: true
};

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-donate-us',
  providers: [COUNTER_CONTROL_ACCESSOR],
  templateUrl: './donate-us.component.html',
  styleUrls: ['./donate-us.component.css']
})
export class DonateUsComponent implements ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;

  value = 100;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 10
  };

  constructor() {
  }

  writeValue(value) {
    console.log(value);
    this.value = value;
  }

  registerOnChange(fn): void {
    this.onModelChange = fn;

  }

  registerOnTouched(fn): void {
    this.onTouch = fn;
  }

  changeState() {
    this.onModelChange(this.value);
    this.onTouch();
  }


}
