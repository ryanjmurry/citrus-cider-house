import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { UserComments } from '../models/user-comments';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: AngularFireList<UserComments> = null;

  constructor(private afDb: AngularFireDatabase) {
    this.comments = afDb.list('/userComments')
  }

  saveComment(userComment: UserComments): void {
    this.comments.push(userComment);
  }

  getComments(): AngularFireList<UserComments> {
    return this.comments;
  }

  publishComment(comment): void {
    console.log(comment)
    let selectedComment = this.afDb.object('userComment/' + comment.key);
    selectedComment.update({publish : true}).catch(error => this.handleError(error));
  }

  // unpublishComment(comment): void {
  //   comment.update({publish : false}).catch(error => this.handleError(error));
  // }

  private handleError(error) {
    console.log(error);
  }
}

