import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGatewayListComponent } from './management-gateway-list.component';

describe('ManagementGatewayListComponent', () => {
  let component: ManagementGatewayListComponent;
  let fixture: ComponentFixture<ManagementGatewayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGatewayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementGatewayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
