import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ɵisDefaultChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  @Input() label;
  @Input() formGroup;
  @Input() controlName;
  @Output() selectedValues = new EventEmitter();
  @Output() paymentModeArray = new EventEmitter();
  name = 'name';
  paymentMode = [
    {id: 1, name: 'Cash '},
    {id: 2, name: 'Cheque'},
    {id: 3, name: 'Demand Draf'},
  ];

  constructor() {
  }

  ngOnInit() {
    this.selectedValues.emit(1);
    this.paymentModeArray.emit(this.paymentMode);

  }

  funcConLog($event) {

    console.log($event.srcElement.innerHTML);
  }

  sendLabelValue(data) {
    this.selectedValues.emit(data);
  }

  sendPaymentModeArray() {
    this.paymentModeArray.emit(this.paymentMode);
  }
}
