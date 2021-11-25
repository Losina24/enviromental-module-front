import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalDeviceFormComponent } from './enviromental-device-form.component';

describe('EnviromentalDeviceFormComponent', () => {
  let component: EnviromentalDeviceFormComponent;
  let fixture: ComponentFixture<EnviromentalDeviceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalDeviceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
