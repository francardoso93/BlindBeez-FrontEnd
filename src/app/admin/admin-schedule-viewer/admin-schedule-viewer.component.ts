import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/core/company.service';
import { Observable } from 'rxjs';
import { Company } from 'src/app/scheduler/company';
import { DateTimeFormatterService } from 'src/app/core/datetime-formatter.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-schedule-viewer',
  templateUrl: './admin-schedule-viewer.component.html',
  styleUrls: ['./admin-schedule-viewer.component.css']
})
export class AdminScheduleViewerComponent implements OnInit {
  availableCompanies: Observable<Company[]>;
  companyId: number;
  selectedDate: string;
  dateReg: RegExp = environment.dateReg;

  constructor(
    private companyService: CompanyService, private dateTimeFormatterService: DateTimeFormatterService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.availableCompanies = this.companyService.listCompanies();
  }

  setSelectedDate(selectedDate) {
    if (selectedDate && this.dateReg.test(selectedDate)) {
      this.selectedDate = this.dateTimeFormatterService.convertDateFormatToBackend(selectedDate);
      console.log(this.selectedDate);
    }
  }
}
