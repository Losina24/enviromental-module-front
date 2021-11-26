import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalSensorFormComponent } from './enviromental-sensor-form.component';

describe('EnviromentalSensorFormComponent', () => {
  let component: EnviromentalSensorFormComponent;
  let fixture: ComponentFixture<EnviromentalSensorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalSensorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalSensorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
