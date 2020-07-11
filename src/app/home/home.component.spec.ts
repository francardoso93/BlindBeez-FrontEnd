import { TestBed, async } from "@angular/core/testing";
import * as axe from "axe-core";
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PartnersComponent } from './partners/partners.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe("HomeComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AboutUsComponent,
        ContactFormComponent,
        PartnersComponent,
        BannerComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({
          warnOnNgModelWithFormControl: "never",
        }),
      ],
    }).compileComponents();
  }));

  it("should create the component", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be totally accessible for blind people", (done) => {
    const fixture = TestBed.createComponent(HomeComponent);
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
