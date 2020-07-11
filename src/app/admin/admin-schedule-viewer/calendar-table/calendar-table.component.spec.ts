import { TestBed, async } from '@angular/core/testing';
import * as axe from 'axe-core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';
import { SchedulerModule } from 'src/app/scheduler/scheduler.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CoreModule } from 'src/app/core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarTableComponent } from './calendar-table.component';

describe('AdminCalendarTableComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule, CommonModule, SchedulerModule, FormsModule, ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}), TextMaskModule, CoreModule, RouterTestingModule
      ],
      declarations: [
        CalendarTableComponent,
      ]      
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(CalendarTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should be totally accessible for blind people', done => {
    const fixture = TestBed.createComponent(CalendarTableComponent);
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
