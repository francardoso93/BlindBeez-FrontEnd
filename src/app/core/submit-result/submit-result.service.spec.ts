import { TestBed } from '@angular/core/testing';

import { SubmitResultService } from './submit-result.service';

describe('SubmitResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitResultService = TestBed.get(SubmitResultService);
    expect(service).toBeTruthy();
  });
});
