import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CalendarTableService } from './calendar-table.service';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/scheduler/schedule';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit, OnChanges {
  @Input() date: string;
  @Input() companyId: number;
  scheduleList: Observable<Schedule[]>;

  constructor(private calendarTableService: CalendarTableService) { }


  ngOnInit() {
    this.getSchedules();
  }

  ngOnChanges(): void {
    this.getSchedules()
  }

  async getSchedules() {
    if (this.date && this.companyId) {
      this.scheduleList = this.calendarTableService.listSchedules(this.date, this.companyId);
    }
  }

  deleteSchedule(scheduleId: string) {
    console.log("Delete schedule!");
    console.log(scheduleId);
    this.calendarTableService.deleteSchedule(scheduleId, this.getSchedules.bind(this));
    ;
  }    
}