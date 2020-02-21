import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SchedulerService } from './scheduler.service';
import { Company } from './company';
import { Observable, Scheduler } from 'rxjs';
import { Schedule } from './schedule';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  clientScheduleForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  // TODO: Receber esses dados de serviço
  companies: Observable<Company[]>;
  times: Observable<Schedule[]>;

  // times = [
  //   {
  //     key: '12:00',
  //     value: '12:00'
  //   },
  //   {
  //     key: '13:30',
  //     value: '13:30'
  //   },
  //   {
  //     key: '14:00',
  //     value: '14:00'
  //   }
  // ];

  //

  public datemask = [
    /[0-9]/,
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
  ) {}

  getCompanies() {
    this.companies = this.schedulerService.listAvailableCompanies();
    this.times = this.schedulerService.listAvailableTimes();
  }

  ngOnInit() {
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

  submitForm(value: any) {
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
