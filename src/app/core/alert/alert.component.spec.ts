import { TestBed, async } from "@angular/core/testing";
import * as axe from "axe-core";
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { DateTimeFormatterService } from '../datetime-formatter.service';
import { CompanyService } from '../company.service';

describe("AlertComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AlertComponent],
      providers: [DateTimeFormatterService, CompanyService],
    }).compileComponents();
  }));

  it("should create the component", () => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be totally accessible for blind people", (done) => {
    const fixture = TestBed.createComponent(AlertComponent);
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
