import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Schedule } from './schedule';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> f62f82065c7416b24395a241af3e86548c7d9ef6

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
    const params = new HttpParams();
    if (date) {
      params.set('date', date);
    }
    if (companyId) {
      params.set('companyId', companyId.toString());
    }
    if (onlyAvailableTime) {
      params.set('onlyAvailableTime', String(onlyAvailableTime));
    }
    return this.http.get<Schedule[]>(
      environment.apiroot + environment.schedules,
      {
        params
      }
    );
  }
}
