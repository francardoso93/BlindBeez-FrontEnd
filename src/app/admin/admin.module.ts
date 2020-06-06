import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminScheduleViewerComponent } from './admin-schedule-viewer/admin-schedule-viewer.component';
import { AdminNewScheduleComponent } from './admin-new-schedule/admin-new-schedule.component';
import { CalendarTableComponent } from './admin-schedule-viewer/calendar-table/calendar-table.component';
import { AdminComponent } from './admin.component';
import { SchedulerModule } from '../scheduler/scheduler.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminScheduleViewerComponent, AdminNewScheduleComponent, CalendarTableComponent, AdminComponent],
  imports: [
    CommonModule, SchedulerModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
