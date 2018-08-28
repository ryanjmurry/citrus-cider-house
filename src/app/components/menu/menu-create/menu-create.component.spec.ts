import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCreateComponent } from './menu-create.component';

describe('MenuCreateComponent', () => {
  let component: MenuCreateComponent;
  let fixture: ComponentFixture<MenuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
