import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-donate-us',
  templateUrl: './donate-us.component.html',
  styleUrls: ['./donate-us.component.css']
})
export class DonateUsComponent implements OnInit {

  @Output() sliderValue = new EventEmitter();
  value = 500;
  options: Options = {
    floor: 0,
    ceil: 1000,
    step: 10
  };

  constructor() {
  }

  ngOnInit() {
  }

  sendValue(data) {
    this.sliderValue.emit(data);
  }

}
