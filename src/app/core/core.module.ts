import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeFormatterService } from './datetime-formatter.service';
import { SubmitResultComponent } from './submit-result/submit-result.component';
import { CompanyService } from './company.service';

@NgModule({
  declarations: [SubmitResultComponent],
  providers: [DateTimeFormatterService, CompanyService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
