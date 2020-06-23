import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
import { Schedule } from './schedule';
import { Company } from './company';
import { Client } from './client';
import { Router } from '@angular/router';
import { SchedulerService } from './scheduler.service';
import { SubmitResultService } from '../core/submit-result/submit-result.service';
import { ClientScheduler } from './client.scheduler';
import { environment } from 'src/environments/environment';

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

  dateReg: RegExp = environment.dateReg;
  dateMask = environment.dateMask;


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

  async submitForm(clientScheduleFormValue: any) {
    this.submitted = true;
    if (this.clientScheduleForm.valid) {
      this.showMessage = true;

      const clientScheduler: ClientScheduler = {
        name: clientScheduleFormValue.name,
        companyId: parseInt(clientScheduleFormValue.companyId),
        date: clientScheduleFormValue.date,
        email: clientScheduleFormValue.email,
        phone: clientScheduleFormValue.phone,
        scheduleId: parseInt(clientScheduleFormValue.scheduleId),
      }
      console.log(clientScheduler);
      await this.schedulerService.postReservedSchedule(clientScheduler).subscribe(() => {
        this.submitResultService
          .setResultSubmitResultText('Agendamento realizado com sucesso!', 'Essa sessão foi reservada para você, até já!');
        this.router.navigate(['agendamento/resposta']);
      }, () => {
        this.submitResultService
          .setResultSubmitResultText('Erro', 'Não foi possível realizar seu agendamento. Favor nos avisar em contato@blindbeez.com.br');
        this.router.navigate(['agendamento/resposta']);
      });
    } else {
      setTimeout(() => {
        const errorHeading: HTMLElement =
          document.querySelector('#error-heading');
        errorHeading.focus();
      }, 1500)
    }
  }
}