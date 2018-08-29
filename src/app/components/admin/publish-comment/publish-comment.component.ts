import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-publish-comment',
  templateUrl: './publish-comment.component.html',
  styleUrls: ['./publish-comment.component.css'],
  providers: [CommentsService]
})
export class PublishCommentComponent implements OnInit {

  comments: any;
  marked = false;
  theCheckbox = false;

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
