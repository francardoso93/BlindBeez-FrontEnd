import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from 'src/app/scheduler/schedule';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarTableService {

  constructor(private http: HttpClient) { }

  listSchedules(date: string, companyId: number): Observable<Schedule[]> {
    const initialDate: string = date + "T00:00:00";
    const finalDate: string = date + "T23:59:59";
    return this.http.get<Schedule[]>(
      environment.apiroot + environment.schedules + "?initialDate=" + initialDate  + "&finalDate=" + finalDate + "&companyId=" + companyId,
    );
  }

  deleteSchedule(scheduleId: string, callback: Function) {
    const url = environment.apiroot + environment.schedules + "/" + scheduleId;
    console.log(url);
    this.http.delete(environment.apiroot + environment.schedules + "/" + scheduleId).subscribe(() => setTimeout(callback(), environment.refreshFormAfterDeleteTimeout));;
  }
}
