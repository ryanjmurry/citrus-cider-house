import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuDetailsComponent } from './admin-menu-details.component';

describe('AdminMenuDetailsComponent', () => {
  let component: AdminMenuDetailsComponent;
  let fixture: ComponentFixture<AdminMenuDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
