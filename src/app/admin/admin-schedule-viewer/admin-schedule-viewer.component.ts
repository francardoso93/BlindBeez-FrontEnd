import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/core/company.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/scheduler/company';
import { environment } from 'src/environments/environment';
import { CalendarTableService } from './calendar-table/calendar-table.service';

@Component({
  selector: 'app-admin-schedule-viewer',
  templateUrl: './admin-schedule-viewer.component.html',
  styleUrls: ['./admin-schedule-viewer.component.css']
})
export class AdminScheduleViewerComponent implements OnInit {
  availableCompanies: Observable<Company[]>; 
  companyId: number;
  /** TODO: Receber esse valores do inputs */
  selectedDate: string = "2020-07-04";
  constructor(
    private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.availableCompanies = this.companyService.listCompanies();
  }

}
