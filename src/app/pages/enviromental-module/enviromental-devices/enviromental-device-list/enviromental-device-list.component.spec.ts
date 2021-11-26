import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalDeviceListComponent } from './enviromental-device-list.component';

describe('EnviromentalDeviceListComponent', () => {
  let component: EnviromentalDeviceListComponent;
  let fixture: ComponentFixture<EnviromentalDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalDeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
