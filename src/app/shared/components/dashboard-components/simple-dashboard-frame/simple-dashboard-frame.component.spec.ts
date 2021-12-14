import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleDashboardFrameComponent } from './simple-dashboard-frame.component';

describe('SimpleDashboardFrameComponent', () => {
  let component: SimpleDashboardFrameComponent;
  let fixture: ComponentFixture<SimpleDashboardFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDashboardFrameComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDashboardFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
