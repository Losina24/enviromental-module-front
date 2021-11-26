import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNetworkServerListComponent } from './management-network-server-list.component';

describe('ManagementNetworkServerListComponent', () => {
  let component: ManagementNetworkServerListComponent;
  let fixture: ComponentFixture<ManagementNetworkServerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementNetworkServerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementNetworkServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
