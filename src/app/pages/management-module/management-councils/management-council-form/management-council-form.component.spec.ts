import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCouncilFormComponent } from './management-council-form.component';

describe('ManagementCouncilFormComponent', () => {
  let component: ManagementCouncilFormComponent;
  let fixture: ComponentFixture<ManagementCouncilFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCouncilFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCouncilFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
