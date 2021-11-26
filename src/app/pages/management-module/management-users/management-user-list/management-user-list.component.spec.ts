import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUserListComponent } from './management-user-list.component';

describe('ManagementUserListComponent', () => {
  let component: ManagementUserListComponent;
  let fixture: ComponentFixture<ManagementUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
