import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeFormatterService } from './datetime-formatter.service';
import { SubmitResultComponent } from './submit-result/submit-result.component';
import { CompanyService } from './company.service';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmitResultComponent, AlertComponent],
  providers: [DateTimeFormatterService, CompanyService],
  exports: [AlertComponent]  
})
export class CoreModule { }
