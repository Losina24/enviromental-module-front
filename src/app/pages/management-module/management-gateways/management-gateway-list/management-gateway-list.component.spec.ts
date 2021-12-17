import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ManagementGatewayListComponent } from './management-gateway-list.component';
import { ManagementGatewaysService } from '../management-gateways.service';

describe('ManagementGatewayListComponent', () => {
  let component: ManagementGatewayListComponent;
  let fixture: ComponentFixture<ManagementGatewayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementGatewayListComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [ ManagementGatewaysService ]
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
