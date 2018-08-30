import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMerchCreateComponent } from './admin-merch-create.component';

describe('AdminMerchCreateComponent', () => {
  let component: AdminMerchCreateComponent;
  let fixture: ComponentFixture<AdminMerchCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMerchCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMerchCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
