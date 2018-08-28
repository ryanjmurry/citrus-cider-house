import { Injectable } from '@angular/core';
import { UserComments } from '../models/user-comments';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: AngularFireList<UserComments> = null;

  constructor(private afDb: AngularFireDatabase) {
    // afDb.list<UserComments>('/userComments').valueChanges().subscribe();
    this.comments = afDb.list('/userComments')
    console.log(this.comments)
    
  }

  saveComment(userComment: UserComments): void{
    this.comments.push(userComment);
  }

  getComments(): AngularFireList<UserComments> {
    return this.comments;
  }
}
