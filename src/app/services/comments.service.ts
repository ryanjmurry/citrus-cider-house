import { Injectable } from '@angular/core';
import { UserComments } from '../models/user-comments';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: AngularFireList<any[]>;

  constructor(private afDb: AngularFireDatabase) {
    afDb.list<UserComments>('/userComments').valueChanges().subscribe(console.log);
    this.comments = afDb.list('/userComments')
  }

  getComments(){
    return this.comments;
  }
}
