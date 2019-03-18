import { TestBed } from '@angular/core/testing';

import { OfficerServiceService } from './officer.service';

describe('OfficerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficerServiceService = TestBed.get(OfficerServiceService);
    expect(service).toBeTruthy();
  });
});
