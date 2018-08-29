import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from "../../services/comments.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comments-carousel',
  templateUrl: './comments-carousel.component.html',
  styleUrls: ['./comments-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CommentsCarouselComponent implements OnInit {

  comments: any;

  constructor(config: NgbCarouselConfig, private commentsService: CommentsService) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
  }

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

  consolelog() {
    console.log(this.comments)
  }

}
