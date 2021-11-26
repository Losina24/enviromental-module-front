import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalSensorListComponent } from './enviromental-sensor-list.component';

describe('EnviromentalSensorListComponent', () => {
  let component: EnviromentalSensorListComponent;
  let fixture: ComponentFixture<EnviromentalSensorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalSensorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalSensorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
