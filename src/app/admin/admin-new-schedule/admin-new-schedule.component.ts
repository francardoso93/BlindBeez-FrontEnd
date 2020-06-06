import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { Company } from 'src/app/scheduler/company';
import { SchedulerService } from 'src/app/scheduler/scheduler.service';
import { environment } from 'src/environments/environment';

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

  dateReg: RegExp = environment.dateReg;
  dateMask = environment.dateMask;

  constructor(
    public fb: FormBuilder,
    private schedulerService: SchedulerService,
    private router: Router, ) { }

  ngOnInit() {
    this.getCompanies();
    this.newScheduleForm = this.fb.group({
      companyId: ['', Validators.required],
      initialDate: [null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            this.dateReg
          )
        ])],
      finalDate: [null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            this.dateReg
          )
        ])],
      initalTime: ['', Validators.required], //TODO: permite de 00:00 a 23:59 (Mascara + validação)
      endTime: ['', Validators.required], //TODO: permite de 00:00 a 23:59 (Mascara + validação)
      minuteInterval: ['', Validators.required], //TODO: Permite apenas de 1 a 60 (Mascara + validação)
    });
  }

  getCompanies() {
    this.availableCompanies = this.schedulerService.listCompanies();
  }

  async submitForm(newScheduleForm: any) {
    console.log(newScheduleForm);
  };
}
