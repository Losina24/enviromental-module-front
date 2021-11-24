import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDashboardFrameComponent } from './simple-dashboard-frame.component';

describe('SimpleDashboardFrameComponent', () => {
  let component: SimpleDashboardFrameComponent;
  let fixture: ComponentFixture<SimpleDashboardFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDashboardFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDashboardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
