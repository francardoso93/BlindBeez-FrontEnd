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

  postReserverSchedule(reservedSchedule) {
    return this.http.post(environment.apiroot + environment.client_schedule, reservedSchedule).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
