import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MealPreferences } from '../../MealPreferences';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  mealPreferences = MealPreferences;

  @Input() formGroup: FormGroup;
  @Input() label: string;
  @Input() controlName: string;

  constructor() {}

  ngOnInit() {
  }

}
