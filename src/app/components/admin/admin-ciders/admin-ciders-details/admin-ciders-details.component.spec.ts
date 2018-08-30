import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCidersDetailsComponent } from './admin-ciders-details.component';

describe('AdminCidersDetailsComponent', () => {
  let component: AdminCidersDetailsComponent;
  let fixture: ComponentFixture<AdminCidersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCidersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCidersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
