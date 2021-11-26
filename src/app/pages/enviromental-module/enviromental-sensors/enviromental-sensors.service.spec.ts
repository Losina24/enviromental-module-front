import { TestBed } from '@angular/core/testing';

import { EnviromentalSensorsService } from './enviromental-sensors.service';

describe('EnviromentalSensorsService', () => {
  let service: EnviromentalSensorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentalSensorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
