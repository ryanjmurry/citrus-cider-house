import { Component, OnInit } from '@angular/core';
import { UserComments } from "../../models/user-comments";
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comments-carousel',
  templateUrl: './comments-carousel.component.html',
  styleUrls: ['./comments-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CommentsCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
  }

}
