import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/app/scheduler/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminNewScheduleService {

  constructor(private http: HttpClient) { }

  listCompanies(): Observable<Company[]> {

    return this.http.get<Company[]>(
      environment.apiroot + environment.companies,
    );
  }

  postAvailableSchedules(availableSchedules) {
    return this.http.post(environment.apiroot + environment.schedules, availableSchedules);
  }
}
