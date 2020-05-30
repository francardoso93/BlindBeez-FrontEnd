import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
import { Schedule } from './schedule';
import { Company } from './company';
import { Client } from './client';
import { Router } from '@angular/router';
import { SchedulerService } from './scheduler.service';
import { SubmitResultService } from './submit-result/submit-result.service';

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
  companyId: number;
  date: string;
  schedule: Schedule;
  availableCompanies: Observable<Company[]>;
  times: Schedule[];

  dateReg: RegExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  
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
    private schedulerService: SchedulerService,
    private submitResultService: SubmitResultService,
    private router: Router,
  ) { }

  getCompanies() {
    this.availableCompanies = this.schedulerService.listCompanies();
  }

  async getAvailableTimes(date: string, companyId: number) {
    this.times = [];
    if (date && this.dateReg.test(date) && companyId) {
      this.schedulerService.listSchedules(date, companyId, true).subscribe(data => {
        this.times = data;
      });
    }
  }

  checkIfAllTimesForTodayAreUnavailable(): boolean {
    return this.date && Date.parse(this.date) && this.companyId != null && (this.times == null || this.times.length === 0);
  }

  ngOnInit() {
    this.client = new Client();
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
      companyId: ['', Validators.required],
      phone: [null, Validators.required],
      date: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            this.dateReg
          )
        ])
      ],
      scheduleId: ['', Validators.required]
    });
  }

  async submitForm(value: any) {
    console.log(value);

    this.submitted = true;

    if (this.clientScheduleForm.valid) {
      this.showMessage = true;
      await this.schedulerService.postReservedSchedule(value).subscribe(() => {
        this.submitResultService
          .setResultSubmitResultText('Agendamento realizado com sucesso!', 'Essa sessão foi reservada para você, até já!');
        this.router.navigate(['/resposta']);
      }, () => {
        this.submitResultService
          .setResultSubmitResultText('Erro', 'Não foi possível realizar seu agendamento. Favor nos avisar em contato@blindbeez.com.br');
        this.router.navigate(['/resposta']);
      });
    } else {
      const errorHeading: HTMLElement =
        document.querySelector('#error-heading');
      errorHeading.focus();
    }
  }
}
