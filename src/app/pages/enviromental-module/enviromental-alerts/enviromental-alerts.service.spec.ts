import { TestBed } from '@angular/core/testing';

import { EnviromentalAlertsService } from './enviromental-alerts.service';

describe('EnviromentalAlertsService', () => {
  let service: EnviromentalAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentalAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
