import { TestBed } from '@angular/core/testing';

import { EnviromentalMeasuresService } from './enviromental-measures.service';

describe('EnviromentalMeasuresService', () => {
  let service: EnviromentalMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviromentalMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
