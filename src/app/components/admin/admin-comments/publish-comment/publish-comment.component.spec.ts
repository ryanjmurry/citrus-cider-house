import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishCommentComponent } from './publish-comment.component';

describe('PublishCommentComponent', () => {
  let component: PublishCommentComponent;
  let fixture: ComponentFixture<PublishCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
