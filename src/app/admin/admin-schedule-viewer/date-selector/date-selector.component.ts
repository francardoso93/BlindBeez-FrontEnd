import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DateTimeFormatterService } from 'src/app/core/datetime-formatter.service';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {
  initialDate;
  dateMask = environment.dateMask;
  dateReg: RegExp = environment.dateReg;
  @Output() onDateChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dateTimeFormatterService: DateTimeFormatterService) { }

  ngOnInit() {
  }

  oneDayBefore() {
    this.dateControlClicked('-');
  }

  nextDay() {
    this.dateControlClicked('+');
  }

  onDateChange() {
    if (this.initialDate && this.dateReg.test(this.initialDate)) {
      this.onDateChanged.emit(this.dateTimeFormatterService.convertDateFormatToBackend(this.initialDate));
    }
  }

  private dateControlClicked(operator: string) {
    if (this.initialDate) {
      const currentDate: Date = this.getCurrentDate();
      currentDate.setDate(operator === '+' ? currentDate.getDate() + 1 : currentDate.getDate() - 1);
      this.initialDate = this.dateTimeFormatterService.convertDateFormatToFrontend(currentDate);
      this.onDateChange();
    }

  }

  private getCurrentDate(): Date {
    return new Date(this.dateTimeFormatterService.convertDateFormatToBackend(this.initialDate) + 'T11:00:00');
  }
}
