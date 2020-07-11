import { TestBed, async } from '@angular/core/testing';
import * as axe from 'axe-core';
import { AdminScheduleViewerComponent } from './admin-schedule-viewer.component';
import { AdminNewCompanyComponent } from '../admin-new-company/admin-new-company.component';
import { CalendarTableComponent } from './calendar-table/calendar-table.component';
import { AdminComponent } from '../admin.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { CommonModule } from '@angular/common';
import { SchedulerModule } from 'src/app/scheduler/scheduler.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CoreModule } from 'src/app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AdminScheduleViewerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule, CommonModule, SchedulerModule, FormsModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}), TextMaskModule, CoreModule, RouterTestingModule
      ],
      declarations: [
        AdminScheduleViewerComponent,
        AdminNewCompanyComponent, CalendarTableComponent,
        AdminComponent,
        DateSelectorComponent,
      ]      
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(AdminScheduleViewerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be totally accessible for blind people', done => {
    const fixture = TestBed.createComponent(AdminScheduleViewerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    axe.run(compiled, {}, (err, results) => {
      if (err) {
        throw err;
      }

      if (results.violations.length > 0) {
        console.log(JSON.stringify(results.violations, null, 4));
      }

      expect(results.violations.length).toBe(0);
      done();
    });
  });
});
