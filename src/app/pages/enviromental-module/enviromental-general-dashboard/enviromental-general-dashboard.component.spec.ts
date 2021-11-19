import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalGeneralDashboardComponent } from './enviromental-general-dashboard.component';

describe('EnviromentalGeneralDashboardComponent', () => {
  let component: EnviromentalGeneralDashboardComponent;
  let fixture: ComponentFixture<EnviromentalGeneralDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalGeneralDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalGeneralDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
