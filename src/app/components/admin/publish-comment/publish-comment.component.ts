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

  togglePublish(event, key) {
    console.log(this.commentsService)
    if (this.comments[4].key == key) {
      console.log(this.comments[0].key)
      console.log(this.comments[4].key)
      this.marked = event.target.checked;
      // console.log(event.target.checked)
    }
  }

}
