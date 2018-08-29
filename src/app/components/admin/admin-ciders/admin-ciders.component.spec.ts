import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCidersComponent } from './admin-ciders.component';

describe('AdminCidersComponent', () => {
  let component: AdminCidersComponent;
  let fixture: ComponentFixture<AdminCidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
