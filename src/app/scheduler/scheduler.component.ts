import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchedulerService } from './scheduler.service';
import { Observable } from 'rxjs';
import { Schedule } from './schedule';
import { Company } from './company';
import { Client } from './client';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  clientScheduleForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;
  client: Client;
  company: Company;
  date: string;
  schedule: Schedule;
  availableCompanies: Observable<Company[]>;
  times: Observable<Schedule[]>;

  public datemask = [
    /[0-3]/,
    /[0-9]/,
    '/',
    /[0-1]/,
    /[0-9]/,
    '/',
    /[1-2]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/
  ];

  constructor(
    public fb: FormBuilder,
    private schedulerService: SchedulerService
  ) { }

  getCompanies() {
    this.availableCompanies = this.schedulerService.listCompanies();
  }

  getAvailableTimes(date: string, companyId: number) {
    if (date && companyId) {
      console.log('Buscando horarios disponiveis');
      this.times = this.schedulerService.listSchedules(date, companyId, true);
    }
  }

  ngOnInit() {
    this.client = new Client();
    this.company = new Company();
    this.schedule = new Schedule();
    this.showMessage = false;
    this.submitted = false;
    this.getCompanies();

    this.clientScheduleForm = this.fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/\b\S+@\S+\b/g)
        ])
      ],
      company: ['', Validators.required],
      date: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/][0-2][0-9][0-9][0-9]'
          )
        ])
      ],
      massotherapist: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  // onBlur() {
  //   this.getTimes(this.date, this.company.id);
  // }

  submitForm(value: any) {
    console.log(this.company.id);
    console.log(this.client.name);
    console.log(value);

    this.submitted = true;

    if (this.clientScheduleForm.valid) {
      this.showMessage = true;
      //TODO: Submit real do formulario JSON
      setTimeout(() => {
        const messageHeading = <HTMLElement>(
          document.querySelector('#message-heading')
        );
        messageHeading.focus();
      }, 100);
    } else {
      setTimeout(() => {
        const errorHeading = <HTMLElement>(
          document.querySelector('#error-heading')
        );
        errorHeading.focus();
      }, 100);
    }
  }
}
