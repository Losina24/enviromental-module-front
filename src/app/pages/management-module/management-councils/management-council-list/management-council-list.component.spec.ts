import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementCouncilListComponent } from './management-council-list.component';

describe('ManagementCouncilListComponent', () => {
  let component: ManagementCouncilListComponent;
  let fixture: ComponentFixture<ManagementCouncilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementCouncilListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementCouncilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
