import { TestBed, async } from "@angular/core/testing";
import * as axe from "axe-core";
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';

describe("FooterComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, SocialMediaComponent],
      imports: [
        CommonModule
      ],
    }).compileComponents();
  }));

  it("should create the component", () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be totally accessible for blind people", (done) => {
    const fixture = TestBed.createComponent(FooterComponent);
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
