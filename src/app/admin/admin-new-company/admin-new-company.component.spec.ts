import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewCompanyComponent } from './admin-new-company.component';

describe('AdminNewCompanyComponent', () => {
  let component: AdminNewCompanyComponent;
  let fixture: ComponentFixture<AdminNewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
