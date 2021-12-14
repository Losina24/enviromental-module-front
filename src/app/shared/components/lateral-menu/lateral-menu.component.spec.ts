import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';
import { LateralMenuComponent } from './lateral-menu.component';

describe('LateralMenuComponent', () => {
  let component: LateralMenuComponent;
  let fixture: ComponentFixture<LateralMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralMenuComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
