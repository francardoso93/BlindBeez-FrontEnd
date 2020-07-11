import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CalendarTableService } from './calendar-table.service';
import { Observable } from 'rxjs';
import { Schedule } from 'src/app/scheduler/schedule';
declare var jQuery:any;
import * as bootstrap from "bootstrap";
import * as $AB from "jquery";

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit, OnChanges {
  @Input() date: string;
  @Input() companyId: number;
  scheduleList: Observable<Schedule[]>;

  selectedScheduleForAction: Schedule;
  descriptionForAlert: string;
  alertConfirmedCallback: Function;

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

  deleteSchedulePressed(schedule: Schedule) {   
    this.descriptionForAlert = "Tem certeza que deseja deletar esse horário disponível?";
    this.selectedScheduleForAction = schedule;
    this.alertConfirmedCallback = this.deleteScheduleConfirmed;
    $("#alertModal").modal("show");
  }    

  cancelReservedSchedulePressed(schedule: Schedule) {    
    this.descriptionForAlert = "Tem certeza que deseja cancelar essa sessão agendada com o cliente " + schedule.client?.name + "?";    
    this.selectedScheduleForAction = schedule;
    this.alertConfirmedCallback = this.cancelReservedScheduleConfirmed;
    $("#alertModal").modal("show");
  }

  deleteScheduleConfirmed() {   
    this.calendarTableService.deleteSchedule(this.selectedScheduleForAction?.id?.toString(), this.getSchedules.bind(this));
    $("#alertModal").modal("hide");
  }    

  cancelReservedScheduleConfirmed() {
    this.selectedScheduleForAction.reserved = false;
    this.selectedScheduleForAction.client = null;
    this.calendarTableService.updateSchedule(this.selectedScheduleForAction, this.getSchedules.bind(this))
    $("#alertModal").modal("hide");
  }
}