import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-form-comp',
  templateUrl: './test.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['test name'],
    lastName: ['last name'],
    company: ['company'],
    email: ['email'],
    phoneNumber: ['phone number']
  });

  componentGroupName: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    console.log('Form starting');
  }

  changeFirstName() {
    console.log(this.profileForm.get('firstName').value);
  }

  PrintingOnConsole(data) {
    console.log(data);
  }

  getComponentGroupName(data) {
    this.componentGroupName = data;
    console.log(data);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
