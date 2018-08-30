import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchDetailsComponent } from './admin-merch-details.component';

describe('AdminMerchDetailsComponent', () => {
  let component: AdminMerchDetailsComponent;
  let fixture: ComponentFixture<AdminMerchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
