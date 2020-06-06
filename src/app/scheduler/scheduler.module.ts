import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SubmitResultComponent } from './submit-result/submit-result.component';
import { SchedulerService } from './scheduler.service';
import { SubmitResultService } from './submit-result/submit-result.service';


@NgModule({
  declarations: [SchedulerComponent, SubmitResultComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [SubmitResultService, SchedulerService],
})
export class SchedulerModule { }
