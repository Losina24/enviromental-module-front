import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalMeasureListComponent } from './enviromental-measure-list.component';

describe('EnviromentalMeasureListComponent', () => {
  let component: EnviromentalMeasureListComponent;
  let fixture: ComponentFixture<EnviromentalMeasureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalMeasureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalMeasureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
