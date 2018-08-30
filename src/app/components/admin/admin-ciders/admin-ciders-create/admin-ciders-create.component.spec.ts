import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCidersCreateComponent } from './admin-ciders-create.component';

describe('AdminCidersCreateComponent', () => {
  let component: AdminCidersCreateComponent;
  let fixture: ComponentFixture<AdminCidersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCidersCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCidersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
