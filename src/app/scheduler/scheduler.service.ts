import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Schedule } from './schedule';
import { Observable, Scheduler } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http: HttpClient) { }

  listAvailableCompanies(): Observable<Company[]> {
     return this.http.get<Company[]>(environment.apiroot + environment.companies);
  }

  listAvailableTimes(): Observable<Schedule[]> { // TODO: Receber valor 'date' a partir do input
    const params = new HttpParams().set('onlyAvailableTime', 'true').set('date', '2020-10-01');

    return this.http.get<Schedule[]>(environment.apiroot + environment.schedules, {
      params
    });
 }
}
