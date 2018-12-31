import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  name = 'name';
  paymentMode = [
    {id: 1, name: 'Cash '},
    {id: 2, name: 'Cheque'},
    {id: 3, name: 'Demand Draf'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  funcConLog($event) {

    console.log($event.srcElement.innerHTML);
  }
}
