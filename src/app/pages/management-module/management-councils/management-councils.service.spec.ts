import { TestBed } from '@angular/core/testing';

import { ManagementCouncilsService } from './management-councils.service';

describe('ManagementCouncilsService', () => {
  let service: ManagementCouncilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementCouncilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
