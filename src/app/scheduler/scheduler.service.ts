import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Schedule } from './schedule';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  schedule: Schedule = new Schedule();

  constructor(private http: HttpClient) { }

  listAvailableCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(environment.apiroot + environment.companies);
  }

  listAvailableTimes(): Observable<Schedule[]> {
    if (this.schedule.date && this.schedule.company) {
      const params = new HttpParams()
        .set('onlyAvailableTime', 'true')
        .set('date', this.schedule.date)
        .set('company', this.schedule.company.id.toString());

      return this.http.get<Schedule[]>(environment.apiroot + environment.schedules, {
        params
      });
    }
  }
}
