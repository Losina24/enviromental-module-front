import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';
import { EnviromentalDeviceListComponent } from './enviromental-device-list.component';

describe('EnviromentalDeviceListComponent', () => {
  let component: EnviromentalDeviceListComponent;
  let fixture: ComponentFixture<EnviromentalDeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviromentalDeviceListComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
