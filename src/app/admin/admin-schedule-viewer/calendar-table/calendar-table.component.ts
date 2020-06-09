import { Component, OnInit } from '@angular/core';
import { CalendarTableService } from './calendar-table.service';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/scheduler/schedule';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {
  scheduleList: Observable<Schedule[]>;

  constructor(private calendarTableService: CalendarTableService) { }

  ngOnInit() {
    this.getSchedules();
  }

  async getSchedules() {
    this.scheduleList = this.calendarTableService.listSchedules("2020-07-04", "1");
  }
}
