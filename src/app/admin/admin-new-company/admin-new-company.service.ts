import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/app/scheduler/company';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminNewCompanyService {

  constructor(private http: HttpClient) { }

  postCompany(company: Company): Observable<Company> {

    return this.http.post<Company>(
      environment.apiroot + environment.companies,
      company
    );
  }
}
