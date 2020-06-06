import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { Company } from 'src/app/scheduler/company';
import { SchedulerService } from 'src/app/scheduler/scheduler.service';
import { SubmitResultService } from 'src/app/scheduler/submit-result/submit-result.service';

@Component({
  selector: 'app-admin-new-schedule',
  templateUrl: './admin-new-schedule.component.html',
  styleUrls: ['./admin-new-schedule.component.css']
})
export class AdminNewScheduleComponent implements OnInit {
  newScheduleForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;
  companyId: number;
  availableCompanies: Observable<Company[]>;

  constructor(
    public fb: FormBuilder,
    private schedulerService: SchedulerService,
    private submitResultService: SubmitResultService,
    private router: Router, ) { }

  ngOnInit() {
    this.getCompanies();
    this.newScheduleForm = this.fb.group({
      companyId: ['', Validators.required],
    });
  }

  getCompanies() {
    this.availableCompanies = this.schedulerService.listCompanies();
  }

  async submitForm(newScheduleForm: any) {
    console.log("submitted!");
  };
}
