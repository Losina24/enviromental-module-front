import { TestBed } from '@angular/core/testing';

import { ManagementGatewaysService } from './management-gateways.service';

describe('ManagementGatewaysService', () => {
  let service: ManagementGatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementGatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
