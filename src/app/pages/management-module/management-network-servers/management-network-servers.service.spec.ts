import { TestBed } from '@angular/core/testing';

import { ManagementNetworkServersService } from './management-network-servers.service';

describe('ManagementNetworkServersService', () => {
  let service: ManagementNetworkServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementNetworkServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
