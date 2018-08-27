import { Component, OnInit } from '@angular/core';
import { UserComments } from "../../models/user-comments";

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitComment(name:string, email:string, message:string) {
  }
}
