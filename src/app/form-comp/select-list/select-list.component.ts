import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealPreferences } from '../../MealPreferences';
import { FormControl } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  mealPreferences = MealPreferences;

  @Input() label: string;
  @Input() control: FormControl;

  constructor() {

  }

  ngOnInit() {
  }

}
