import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGatewayFormComponent } from './management-gateway-form.component';

describe('ManagementGatewayFormComponent', () => {
  let component: ManagementGatewayFormComponent;
  let fixture: ComponentFixture<ManagementGatewayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGatewayFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementGatewayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
