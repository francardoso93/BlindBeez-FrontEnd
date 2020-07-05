import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/app/scheduler/company";
import { environment } from "src/environments/environment";
import { Schedule } from 'src/app/scheduler/schedule';

@Injectable({
  providedIn: "root",
})
export class AdminNewScheduleService {
  constructor(private http: HttpClient) {}

  listCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(
      environment.apiroot + environment.companies
    );
  }

  listSchedules(initialDate, finalDate, companyId): Promise<Schedule[]> {
    return this.http.get<Schedule[]>(
      environment.apiroot +
        environment.schedules +
        "?initialDate=" +
        initialDate +
        "&finalDate=" +
        finalDate +
        "&companyId=" +
        companyId
    ).toPromise();
  }

  postAvailableSchedules(availableSchedules) {
    return this.http.post(
      environment.apiroot + environment.schedules,
      availableSchedules
    );
  }
}
