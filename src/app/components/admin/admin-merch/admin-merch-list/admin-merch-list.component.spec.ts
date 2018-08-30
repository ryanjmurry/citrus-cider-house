import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchListComponent } from './admin-merch-list.component';

describe('AdminMerchListComponent', () => {
  let component: AdminMerchListComponent;
  let fixture: ComponentFixture<AdminMerchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
