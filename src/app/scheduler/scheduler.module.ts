import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerComponent } from './scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    RouterModule
  ]
})
export class SchedulerModule { }
