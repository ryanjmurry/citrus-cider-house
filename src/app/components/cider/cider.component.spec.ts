import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiderComponent } from './cider.component';

describe('CiderComponent', () => {
  let component: CiderComponent;
  let fixture: ComponentFixture<CiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
