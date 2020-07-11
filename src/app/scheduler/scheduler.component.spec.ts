import { TestBed, async } from "@angular/core/testing";
import * as axe from "axe-core";
import { SchedulerComponent } from "./scheduler.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from "angular2-text-mask";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "../core/core.module";
import { SubmitResultService } from "../core/submit-result/submit-result.service";
import { SchedulerService } from "./scheduler.service";
import { RouterTestingModule } from '@angular/router/testing';

describe("SchedulerComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchedulerComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({
          warnOnNgModelWithFormControl: "never",
        }),
        TextMaskModule,
        RouterTestingModule,
        HttpClientModule,
        CoreModule,
      ],
      providers: [SubmitResultService, SchedulerService],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(SchedulerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be totally accessible for blind people", (done) => {
    const fixture = TestBed.createComponent(SchedulerComponent);
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
