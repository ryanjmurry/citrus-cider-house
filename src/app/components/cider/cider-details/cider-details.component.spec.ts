import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiderDetailsComponent } from './cider-details.component';

describe('CiderDetailsComponent', () => {
  let component: CiderDetailsComponent;
  let fixture: ComponentFixture<CiderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
