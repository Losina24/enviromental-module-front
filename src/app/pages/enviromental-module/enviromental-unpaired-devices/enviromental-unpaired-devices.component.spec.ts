import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalUnpairedDevicesComponent } from './enviromental-unpaired-devices.component';

describe('EnviromentalUnpairedDevicesComponent', () => {
  let component: EnviromentalUnpairedDevicesComponent;
  let fixture: ComponentFixture<EnviromentalUnpairedDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalUnpairedDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalUnpairedDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
