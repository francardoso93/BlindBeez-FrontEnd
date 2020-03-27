import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Schedule } from './schedule';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  constructor(private http: HttpClient) { }

  listCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(
      environment.apiroot + environment.companies
    );
  }

  listSchedules(date: string, companyId: number, onlyAvailableTime: boolean): Observable<Schedule[]> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', date);
    }
    if (companyId) {
      params = params.set('companyId', companyId.toString());
    }
    if (onlyAvailableTime) {
      params = params.set('onlyAvailableTime', String(onlyAvailableTime));
    }
    return this.http.get<Schedule[]>(
      environment.apiroot + environment.schedules,
      {
        params
      }
    );
  }

  postReservedSchedule(reservedSchedule) {
    return this.http.post(environment.apiroot + environment.client_schedule, reservedSchedule);
  }
}
