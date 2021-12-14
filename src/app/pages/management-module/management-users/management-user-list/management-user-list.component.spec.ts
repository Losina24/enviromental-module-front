import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http'; 
import { RouterTestingModule } from '@angular/router/testing';
import { ManagementUserListComponent } from './management-user-list.component';

describe('ManagementUserListComponent', () => {
  let component: ManagementUserListComponent;
  let fixture: ComponentFixture<ManagementUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementUserListComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule]
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
