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

  listSchedules(date, companyId): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(
      environment.apiroot + environment.schedules + "?date=" + date + "&companyId=" + companyId,
    );
  }
}
