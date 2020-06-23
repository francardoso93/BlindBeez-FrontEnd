import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
import { Router } from '@angular/router';
import { Company } from 'src/app/scheduler/company';
import { environment } from 'src/environments/environment';
import { NewSchedule } from './admin-new-schedule';
import { DateTimeFormatterService } from 'src/app/core/datetime-formatter.service';
import { AdminNewScheduleService } from './admin-new-schedule.service';
import { SubmitResultService } from 'src/app/core/submit-result/submit-result.service';

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
  timeReg: RegExp = environment.timeReg;
  dateMask = environment.dateMask;
  timeMask = environment.timeMask;

  constructor(
    public fb: FormBuilder,
    private newScheduleService: AdminNewScheduleService,
    private dateTimeFormatterService: DateTimeFormatterService,
    private submitResultService: SubmitResultService,
    private router: Router,) { }

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
      initialTime: [null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            this.timeReg
          )
        ])], //TODO: permite de 00:00 a 23:59 (Mascara + validação)
      finalTime: [null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            this.timeReg
          )
        ])],
      //TODO: permite de 00:00 a 23:59 (Mascara + validação)
      minuteInterval: ['', Validators.required], //TODO: Permite apenas de 1 a 60 (Mascara + validação)
    });
  }

  getCompanies() {
    this.availableCompanies = this.newScheduleService.listCompanies();
  }

  async submitForm(newScheduleFormValue: any) {
    this.submitted = true;
    if (this.newScheduleForm.valid) {
      this.showMessage = true;
      const newSchedules: NewSchedule = {
        company: {
          id: newScheduleFormValue.companyId,
          name: undefined
        },
        initialDate:
          this.dateTimeFormatterService.convertDateFormatToBackend(newScheduleFormValue.initialDate) +
          'T' + newScheduleFormValue.initialTime + ':00',
        finalDate:
          this.dateTimeFormatterService.convertDateFormatToBackend(newScheduleFormValue.finalDate) +
          'T' + newScheduleFormValue.finalTime + ':00',
        minuteInterval: newScheduleFormValue.minuteInterval,
      }
      console.log(newSchedules);
      await this.newScheduleService.postAvailableSchedules(newSchedules).subscribe(() => {
        this.submitResultService
          .setResultSubmitResultText('Agendas criadas com sucesso!', 'Essas sessões já estão disponíveis para reserva!');
        this.router.navigate(['/admin/agenda/novo/resposta']);
      }, () => {
        this.submitResultService
          .setResultSubmitResultText('Erro', 'O sistema não foi capaz de criar essas novas sessões');
        this.router.navigate(['/admin/agenda/novo/resposta']);
      });
    } else {
      setTimeout(() => {
        const errorHeading: HTMLElement =
          document.querySelector('#error-heading');
        errorHeading.focus();
      }, environment.validationErrorTimeout);
    }
  };
}
