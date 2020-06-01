import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Schedule } from './schedule';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {
  constructor(private http: HttpClient) { }

  listCompanies(): Observable<Company[]> {

    return this.http.get<Company[]>(
      environment.apiroot + environment.companies,
    );
  }

  listSchedules(date: string, companyId: number, onlyAvailableTime: boolean): Observable<Schedule[]> {
    let params = new HttpParams();
    if (date) {
      params = params.set('date', this.convertDateFormat(date));
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

  private convertDateFormat(date: string) {
    let spliter = this.getDateFormatSpliter(date);
    if (spliter) {
      var re = new RegExp(spliter,"g");
      return (date.split(spliter).reverse().join(spliter)).replace(re, '-');
    } else {
      return date;
    }
  }

  private getDateFormatSpliter(date: string) {
    let spliter;
    if (date.includes("/")) {
      spliter = "/";
    }
    else if (date.includes(".")) {
      spliter = ".";
    }
    else if (date.includes("-")) {
      spliter = "-";
    }
    return spliter;
  }
}
