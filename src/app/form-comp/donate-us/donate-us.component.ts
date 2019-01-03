import {Component, OnInit} from '@angular/core';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-donate-us',
  templateUrl: './donate-us.component.html',
  styleUrls: ['./donate-us.component.css']
})
export class DonateUsComponent implements OnInit {

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

}
