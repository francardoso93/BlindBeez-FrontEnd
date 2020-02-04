import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Company } from './company';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http: HttpClient) { }

  listAvailableCompanies(): Observable<Company[]> {
     return this.http.get<Company[]>(environment.apiroot + environment.companies);
  }
}
