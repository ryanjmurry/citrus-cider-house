import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiderEditComponent } from './cider-edit.component';

describe('CiderEditComponent', () => {
  let component: CiderEditComponent;
  let fixture: ComponentFixture<CiderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
