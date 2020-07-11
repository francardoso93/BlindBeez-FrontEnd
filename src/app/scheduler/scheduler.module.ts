import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SchedulerService } from './scheduler.service';
import { SubmitResultService } from '../core/submit-result/submit-result.service';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    TextMaskModule,
    RouterModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [SubmitResultService, SchedulerService],
})
export class SchedulerModule { }
