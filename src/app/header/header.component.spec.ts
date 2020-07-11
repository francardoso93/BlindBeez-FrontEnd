import { TestBed, async } from "@angular/core/testing";
import * as axe from "axe-core";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe("HeaderComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        RouterTestingModule
      ]      
    }).compileComponents();
  }));

  it("should create the component", () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be totally accessible for blind people", (done) => {
    const fixture = TestBed.createComponent(HeaderComponent);
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
