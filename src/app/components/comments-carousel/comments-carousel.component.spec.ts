import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCarouselComponent } from './comments-carousel.component';

describe('CommentsCarouselComponent', () => {
  let component: CommentsCarouselComponent;
  let fixture: ComponentFixture<CommentsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
