import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../scheduler/company';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    constructor(private http: HttpClient) { }
    listCompanies(): Observable<Company[]> {

        return this.http.get<Company[]>(
            environment.apiroot + environment.companies,
        );
    }
}  