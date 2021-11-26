import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalAlertListComponent } from './enviromental-alert-list.component';

describe('EnviromentalAlertListComponent', () => {
  let component: EnviromentalAlertListComponent;
  let fixture: ComponentFixture<EnviromentalAlertListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalAlertListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalAlertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
