import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MealPreferences, meals } from '../MealPreferences';
import { PhoneValidator } from '../../phone.validator';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-form-comp',
  templateUrl: './test.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {


  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    mealPreference: [MealPreferences[0]],
    paymentMode: []
  });


  componentGroupName: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }


  PrintingOnConsole(data) {
    console.log(data);
  }

  getComponentGroupName(data) {
    this.componentGroupName = data;
    //console.log(data);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
