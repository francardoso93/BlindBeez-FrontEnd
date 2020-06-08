import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {
  initialDate;
  dateMask = environment.dateMask;
  dateReg: RegExp = environment.dateReg;
  constructor() { }

  ngOnInit() {
  }

}
