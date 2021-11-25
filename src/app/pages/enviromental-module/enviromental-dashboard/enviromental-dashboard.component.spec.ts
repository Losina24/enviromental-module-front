import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalDashboardComponent } from './enviromental-dashboard.component';

describe('EnviromentalDashboardComponent', () => {
  let component: EnviromentalDashboardComponent;
  let fixture: ComponentFixture<EnviromentalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
