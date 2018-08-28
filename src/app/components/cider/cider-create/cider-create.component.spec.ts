import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiderCreateComponent } from './cider-create.component';

describe('CiderCreateComponent', () => {
  let component: CiderCreateComponent;
  let fixture: ComponentFixture<CiderCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiderCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
