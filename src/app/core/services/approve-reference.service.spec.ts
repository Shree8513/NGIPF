import { TestBed } from '@angular/core/testing';

import { ApproveReferenceService } from './approve-reference.service';

describe('ApproveReferenceService', () => {
  let service: ApproveReferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveReferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
