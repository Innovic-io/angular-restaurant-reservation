import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MealPreferences} from '../../MealPreferences';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  testValue = 1;

  mealPreferences = MealPreferences;

  constructor() {

  }

  ngOnInit() {
  }

}
