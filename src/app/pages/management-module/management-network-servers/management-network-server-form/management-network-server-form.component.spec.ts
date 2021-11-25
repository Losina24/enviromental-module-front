import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementNetworkServerFormComponent } from './management-network-server-form.component';

describe('ManagementNetworkServerFormComponent', () => {
  let component: ManagementNetworkServerFormComponent;
  let fixture: ComponentFixture<ManagementNetworkServerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementNetworkServerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementNetworkServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
