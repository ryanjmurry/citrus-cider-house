import { Component, OnInit } from '@angular/core';
import { UserComments } from "../../models/user-comments";
import { CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css'],
  providers: [CommentsService]
})
export class SubscribeFormComponent implements OnInit {

  constructor(
    private commentsService: CommentsService
  ) {}

  ngOnInit() {
  }

  submitComment(name:string, email:string, message:string) {
    let newComment: UserComments = new UserComments(name, email, message)
    this.commentsService.saveComment(newComment)
  }


}
