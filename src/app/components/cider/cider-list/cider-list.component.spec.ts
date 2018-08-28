import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiderListComponent } from './cider-list.component';

describe('CiderListComponent', () => {
  let component: CiderListComponent;
  let fixture: ComponentFixture<CiderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
