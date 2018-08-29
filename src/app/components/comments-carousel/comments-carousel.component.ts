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

  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
