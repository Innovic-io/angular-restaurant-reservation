import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-input-first-last',
  templateUrl: './input-first-last.component.html',
  styleUrls: ['./input-first-last.component.css']
})
export class InputFirstLastComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() required: boolean;

  show = true;

  constructor() {

  }

  ngOnInit() {
  }

/*  down() {
    console.log(this.show);
    this.show = !this.show;
  }*/

}
