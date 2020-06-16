import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminScheduleViewerComponent } from './admin-schedule-viewer/admin-schedule-viewer.component';
import { AdminNewScheduleComponent } from './admin-new-schedule/admin-new-schedule.component';
import { CalendarTableComponent } from './admin-schedule-viewer/calendar-table/calendar-table.component';
import { AdminComponent } from './admin.component';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CoreModule } from '../core/core.module';
import { DateSelectorComponent } from './admin-schedule-viewer/date-selector/date-selector.component';
import { RouterModule } from '@angular/router';
import { AdminNewCompanyComponent } from './admin-new-company/admin-new-company.component';

@NgModule({
  declarations: [
    AdminScheduleViewerComponent,
    AdminNewScheduleComponent,
    AdminNewCompanyComponent, CalendarTableComponent,
    AdminComponent,
    DateSelectorComponent,
  ],
  imports: [
    CommonModule, SchedulerModule, FormsModule, ReactiveFormsModule, TextMaskModule, CoreModule, RouterModule
  ]
})
export class AdminModule { }
