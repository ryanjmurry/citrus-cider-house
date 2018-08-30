import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuCreateComponent } from './admin-menu-create.component';

describe('AdminMenuCreateComponent', () => {
  let component: AdminMenuCreateComponent;
  let fixture: ComponentFixture<AdminMenuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMenuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
