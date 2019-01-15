import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MealPreferences, meals } from '../MealPreferences';
import { CheckComponent } from './check/check.component';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-form-comp',
  templateUrl: './test.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  sliderValue: number;
  paymentModeArray: any;

  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    company: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    mealPreference: [MealPreferences[0]],
    paymentMode: [1],
    ddChequeNo: [''],
    drawnOn: [''],
    playableAt: [''],
    donateUs: [this.sliderValue]
  });


  componentGroupName: string;
  paymentModeSelectedValue: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {


  }


  PrintingOnConsole(data) {
    console.log(data);
  }

  getComponentGroupName(data) {
    this.componentGroupName = data;
    // console.log(data);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.log('First name: ' + this.profileForm.get('firstName').value);
    console.log('Last name: ' + this.profileForm.get('lastName').value);
    console.log('E-mail: ' + this.profileForm.get('email').value);
    console.log('Phone number: ' + this.profileForm.get('phoneNumber').value);
    console.log('Meal preference: ' + this.profileForm.get('mealPreference').value);
    console.log('Payment mode id: ' + this.profileForm.get('paymentMode').value);
    for (const entry of this.paymentModeArray) {
      if (this.paymentModeSelectedValue === entry.id) {
        console.log('Payment mode: ' + entry.name);
      }
    }
    console.log('DD/CHEQUE NO.: ' + this.profileForm.get('ddChequeNo').value);
    console.log('DRAWN ON (BANK NAME): ' + this.profileForm.get('drawnOn').value);
    console.log('Playble at: ' + this.profileForm.get('playableAt').value);
    console.log('Donate us: ' + this.sliderValue);


  }

  getValue(data) {
    this.paymentModeSelectedValue = data;
    //console.log(data);

  }


  getPaymentModeArray(data) {
    // console.log(data);
    this.paymentModeArray = data;
    //console.log(this.paymentModeArray);
  }

  resetForm() {
    this.profileForm.reset();
  }

  getSliderValue(data) {
    this.sliderValue = data;
  }

}
