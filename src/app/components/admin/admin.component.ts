import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentAdminView: string;

  constructor() { }

  ngOnInit() {
  }

  show(view: string) {
    this.currentAdminView = view;
    console.log(this.currentAdminView);
  }

}
