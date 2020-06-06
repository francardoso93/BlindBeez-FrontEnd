import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeFormatterService } from './datetime-formatter.service';
import { SubmitResultComponent } from './submit-result/submit-result.component';

@NgModule({
  declarations: [SubmitResultComponent],
  providers: [DateTimeFormatterService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
