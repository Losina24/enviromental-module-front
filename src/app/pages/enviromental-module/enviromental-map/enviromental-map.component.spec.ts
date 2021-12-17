import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalMapComponent } from './enviromental-map.component';

describe('EnviromentalMapComponent', () => {
  let component: EnviromentalMapComponent;
  let fixture: ComponentFixture<EnviromentalMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
