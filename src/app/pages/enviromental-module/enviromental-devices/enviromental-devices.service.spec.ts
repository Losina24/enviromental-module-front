import { TestBed } from '@angular/core/testing';

import { EnviromentalDevicesService } from './enviromental-devices.service';

describe('EnviromentalDevicesService', () => {
  let service: EnviromentalDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentalDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
