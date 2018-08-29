import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchComponent } from './admin-merch.component';

describe('AdminMerchComponent', () => {
  let component: AdminMerchComponent;
  let fixture: ComponentFixture<AdminMerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
