import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommentsService } from '../../../../services/comments.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-publish-comment',
  templateUrl: './publish-comment.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./publish-comment.component.css'],
  providers: [CommentsService],
  styles: [`
    .popoverClass {
      max-width: 600px;
      font-size: 110%;
      color: black;
    }
    .popoverClass .arrow::after {
      border-top-color: aliceblue;
    }
  `]
})
export class PublishCommentComponent implements OnInit {

  comments: any;
  marked = false;
  checked: boolean;
  public isCollapsed = true;

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getComments()
  }

  getComments() {
    this.commentsService.getComments().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(comments => {
      this.comments = comments;
    });
  }

  togglePublish(event, comment){
    if (this.marked = event.target.checked) {
      this.commentsService.publishComment(comment)
    } else {
      this.commentsService.unpublishComment(comment)
    }
  }
}
