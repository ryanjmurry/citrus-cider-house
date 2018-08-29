import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCidersListComponent } from './admin-ciders-list.component';

describe('AdminCidersListComponent', () => {
  let component: AdminCidersListComponent;
  let fixture: ComponentFixture<AdminCidersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCidersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCidersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
